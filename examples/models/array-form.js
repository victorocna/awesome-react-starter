import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  reasons: Yup.array()
    .min(1)
    .of(Yup.object().shape({ reason: Yup.string().required() })),
});

export const initialValues = {
  reasons: [{ reason: '' }],
};
