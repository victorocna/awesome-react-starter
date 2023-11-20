import { Formik, Form, Field } from 'formik';
import { Input, UploadInput } from '../../../components/Fields';
import { Submit, Fieldset } from '../../../components/Formik';
import { validationSchema, initialValues } from '../../models/complex-form';
import { createComplexForm } from '../../api/complex-form';
import { useMutation } from '../../../hooks';

const ComplexForm = () => {
  const mutation = useMutation(createComplexForm, {});

  const handleSubmit = (data, formik) => {
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      console.log(typeof data[key]);
      if (data[key] instanceof File) {
        formData.append(key, data[key]);
      } else {
        formData.append(key, data[key]);
      }
    });
    console.log(formData);
    //mutation.mutate(formData);
    fetch('http://localhost:9000/complex-forms', {
      method: 'POST',
      body: formData, // No headers field here, let the browser set it
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
    formik.resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      debug={true}
    >
      {({ isSubmitting }) => (
        <Form enctype="multipart/form-data" className="flex gap-4">
          <div className="flex flex-col gap-5">
            <Fieldset label="Name input">
              <Field name="name" as={Input} autoFocus autoComplete="off" />
            </Fieldset>
            <Fieldset label="Document upload">
              <Field name="document" as={UploadInput} />
            </Fieldset>
            <Fieldset label="Video upload">
              <Field name="video" as={UploadInput} />
            </Fieldset>
            <Fieldset label="Photo upload">
              <Field name="photo" as={UploadInput} />
            </Fieldset>
          </div>
          <div>
            <Submit className="button full accent" isLoading={isSubmitting}>
              Add
            </Submit>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ComplexForm;
