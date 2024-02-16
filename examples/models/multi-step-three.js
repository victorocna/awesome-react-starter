import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  bio: Yup.string(),
});

export const initialValues = {
  bio: '',
};
