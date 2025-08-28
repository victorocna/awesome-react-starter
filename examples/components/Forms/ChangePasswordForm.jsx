import { changePassword } from '@api/admin';
import { Password } from '@components/Fields';
import { Field, Form, HookForm, Submit } from '@components/HookForm';
import { useMutation } from '@hooks';
import { initialValues, validationSchema } from '@models/change-password';

const ChangePasswordForm = () => {
  const mutation = useMutation(changePassword, {
    successMessage: 'Success! The password has changed!',
    redirectOnSuccess: '/admin',
  });

  const handleSubmit = (data) => {
    return mutation.mutateAsync(data);
  };

  return (
    <HookForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="space-y-6">
          <Field
            as={Password}
            autoFocus={true}
            help="Required info"
            label="Password"
            name="changePassword"
          />
          <Field
            as={Password}
            help="Required info"
            label="Confirm Password"
            name="confirmPassword"
          />
        </div>
        <Submit className="button full primary">Save changes</Submit>
      </Form>
    </HookForm>
  );
};

export default ChangePasswordForm;
