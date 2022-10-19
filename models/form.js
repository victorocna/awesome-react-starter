import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  plusMinusField: Yup.number().required(),
});

export const initialValues = {
  plusMinusField: 0,
};
