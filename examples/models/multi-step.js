import * as Yup from 'yup';

const stepOneSchema = {
  fullname: Yup.string().required('Your name is mandatory'),
  email: Yup.string().email('Your email is invalid').required('Your email is mandatory'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required(),
};
const stepTwoSchema = {
  country: Yup.string().required('Your country is required'),
  dateOfBirth: Yup.date('Your date of birth is invalid'),
};
const stepThreeSchema = {
  bio: Yup.string(),
};

const stepOneValues = {
  fullname: '',
  email: '',
  terms: false,
};
const stepTwoValues = {
  country: '',
  dateOfBirth: '',
  ...stepOneValues,
};
const stepThreeValues = {
  bio: '',
  ...stepTwoValues,
};

export const validationSchema = [
  Yup.object().shape(stepOneSchema), // array of validation schemas
  Yup.object().shape(stepTwoSchema),
  Yup.object().shape(stepThreeSchema),
];

export const initialValues = [
  stepOneValues, // array of initial values
  stepTwoValues,
  stepThreeValues,
];
