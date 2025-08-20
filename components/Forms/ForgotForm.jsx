import { forgot } from '@api/identity';
import { Email, Recaptcha } from '@components/Fields';
import { Field, Form, HookForm, Submit } from '@components/HookForm';
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
        <Field as={Email} autoFocus label="Your email" name="email" />
        <Submit className="button full primary">Send password reset email</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </HookForm>
  );
};

export default ForgotForm;
