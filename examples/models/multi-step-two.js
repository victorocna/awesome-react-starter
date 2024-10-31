import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  country: Yup.string().required('Your country is required'),
  dateOfBirth: Yup.string()
    .matches(/^\d{4}-\d{2}-\d{2}$/, 'Your date of birth format is invalid')
    .required('Your date of birth is required'),
});

export const initialValues = {
  country: '',
  dateOfBirth: '',
};
