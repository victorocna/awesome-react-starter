import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  quantity: Yup.number().required(),
  checkIn: Yup.string().required(),
});

export const initialValues = {
  quantity: 0,
  checkIn: '',
};
