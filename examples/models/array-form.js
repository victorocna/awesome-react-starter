import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  reasons: Yup.array()
    .min(1, 'At least one reason is required.')
    .of(Yup.object().shape({ reason: Yup.string().required('Reason is required.') })),
});

export const initialValues = {
  reasons: [{ reason: '' }],
};
