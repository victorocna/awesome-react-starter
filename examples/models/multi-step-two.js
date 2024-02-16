import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  country: Yup.string().required('Your country is required'),
  dateOfBirth: Yup.date('Your date of birth is invalid'),
});

export const initialValues = {
  country: '',
  dateOfBirth: '',
};
