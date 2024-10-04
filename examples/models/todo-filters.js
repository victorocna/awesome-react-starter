import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  search: Yup.string().min(3, 'At least 3 characters are required for a search'),
  only: Yup.string(),
});

export const initialValues = {
  search: '',
  only: '',
};
