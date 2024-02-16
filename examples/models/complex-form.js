import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
});

export const initialValues = {
  name: '',
  document: null,
  video: null,
  photo: null,
};
