import { forgot } from '@api/identity';
import { Email, Recaptcha } from '@components/Fields';
import { Field, Fieldset, Form, HookForm, Submit } from '@components/HookForm';
import { initialValues, validationSchema } from '@models/forgot';
import { useRef } from 'react';

const ForgotForm = () => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await forgot(ref, values);
  };

  return (
    <HookForm
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="email" label="Your email">
          <Field id="email" name="email" as={Email} autoFocus={true} />
        </Fieldset>
        <Submit className="button full primary">Send password reset email</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </HookForm>
  );
};

export default ForgotForm;
