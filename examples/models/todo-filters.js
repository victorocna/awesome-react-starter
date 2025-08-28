import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  search: Yup.string(),
  only: Yup.string(),
});

export const initialValues = {
  search: '',
  only: 'all',
};
