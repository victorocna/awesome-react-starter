import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  changePassword: Yup.string().required(),
  confirmPassword: Yup.string().required(),
});

export const initialValues = {
  changePassword: '',
  confirmPassword: '',
};
