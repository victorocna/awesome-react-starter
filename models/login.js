import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required(),
});

export const initialValues = {
  email: '',
  password: '',
};
