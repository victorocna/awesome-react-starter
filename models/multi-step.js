import * as Yup from 'yup';

const stepOneSchema = {
  fullname: Yup.string().required('Your name is mandatory'),
  email: Yup.string().email('Your email is invalid').required('Your email is mandatory'),
  terms: Yup.boolean().oneOf([true], 'You must accept the terms and conditions').required(),
};
const stepTwoSchema = {
  country: Yup.string().required(),
  dateOfBirth: Yup.date().required(),
};
const stepThreeSchema = {
  agree: Yup.boolean().oneOf([true]).required(),
};

const stepOneValues = {
  fullname: '',
  email: '',
  terms: true,
};
const stepTwoValues = {
  country: '',
  dateOfBirth: '',
  ...stepOneValues,
};
const stepThreeValues = {
  agree: false,
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
