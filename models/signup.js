import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
});

export const initialValues = {
  name: '',
  email: '',
  password: '',
};
