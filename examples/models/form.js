import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  quantity: Yup.number().required(),
  checkInDate: Yup.string().required(),
  checkInTime: Yup.string().required(),
});

export const initialValues = {
  email: '',
  quantity: 0,
  checkInDate: '',
  checkInTime: '',
};
