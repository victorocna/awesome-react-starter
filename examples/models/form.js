import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  quantity: Yup.number().required(),
});

export const initialValues = {
  quantity: 0,
};
