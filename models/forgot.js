import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
});

export const initialValues = {
  email: '',
};
