import * as Yup from 'yup';

const stepOneSchema = {
  fullname: Yup.string().required(),
  email: Yup.string().email().required(),
};
const stepTwoSchema = {
  country: Yup.string().required(),
  birthday: Yup.date().required(),
};
const stepThreeSchema = {
  agree: Yup.boolean().oneOf([true]).required(),
};

const stepOneValues = {
  fullname: '',
  email: '',
};
const stepTwoValues = {
  country: '',
  birthday: '',
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
