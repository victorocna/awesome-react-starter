import { changePassword } from '@api/admin';
import { Password } from '@components/Fields';
import { Field, Fieldset, Form, HookForm, Submit } from '@components/HookForm';
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
          <Fieldset name="changePassword" label="Password" help="Required info">
            <Field as={Password} name="changePassword" id="changePassword" autoFocus={true} />
          </Fieldset>

          <Fieldset name="confirmPassword" label="Confirm Password" help="Required info">
            <Field as={Password} name="confirmPassword" id="confirmPassword" />
          </Fieldset>
        </div>
        <Submit className="button full primary">Save changes</Submit>
      </Form>
    </HookForm>
  );
};

export default ChangePasswordForm;
