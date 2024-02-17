import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('Your name is mandatory'),
  email: Yup.string().email('Your email is invalid').required('Your email is mandatory'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required(),
});

export const initialValues = {
  fullname: '',
  email: '',
  filter: 'all',
  county: '',
  terms: false,
};
