import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  quantity: Yup.number(),
  checkIn: Yup.string(),
});

export const initialValues = {
  quantity: 0,
  checkIn: '',
};
