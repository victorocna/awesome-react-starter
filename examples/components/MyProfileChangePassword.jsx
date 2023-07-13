import { changePassword } from '@api/admin';
import { Form, Submit } from '@components/Formik';
import { ChangePasswordForm } from '@components/Forms';
import { useMutation } from '@hooks';
import { initialValues, validationSchema } from '@models/change-password';
import { Formik } from 'formik';

const MyProfileChangePassword = () => {
  const mutation = useMutation(changePassword, {
    successMessage: 'Success! The password has changed!',
    redirectOnSuccess: '/admin',
  });

  const handleSubmit = (data) => {
    return mutation.mutateAsync(data);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <ChangePasswordForm />
        <Submit className="button full primary">Save changes</Submit>
      </Form>
    </Formik>
  );
};

export default MyProfileChangePassword;
