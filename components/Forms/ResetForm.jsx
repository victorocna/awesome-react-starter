import { reset } from '@api/identity';
import { Password, Recaptcha } from '@components/Fields';
import { Field, Fieldset, Form, HookForm, Submit } from '@components/HookForm';
import { initialValues, validationSchema } from '@models/reset';
import { useRef } from 'react';

const ResetForm = ({ hash }) => {
  const ref = useRef(null);
  const handleSubmit = async (values) => {
    await reset(ref, hash, values);
  };

  return (
    <HookForm
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="space-y-4">
        <Fieldset name="password" label="Your new password">
          <Field id="password" name="password" as={Password} autoFocus={true} />
        </Fieldset>

        <Submit className="button full primary">Reset password</Submit>
        <Recaptcha ref={ref} />
      </Form>
    </HookForm>
  );
};

export default ResetForm;
