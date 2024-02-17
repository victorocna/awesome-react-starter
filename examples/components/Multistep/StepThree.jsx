import { Button } from '@components';
import { Form } from '@components/Formik';
import { formCookie, router } from '@lib';
import { Formik } from 'formik';
import { initialValues, validationSchema } from '../../models/multi-step-three';
import { Bio } from '../Formik';

const StepThree = () => {
  const handleSubmit = (data) => {
    // Save values in a persistent store and submit form
    formCookie.append('multi-step-form', data);
    // To implement: Remove cookie on success
  };
  const handlePrevious = () => {
    // Move to previous step
    router.push('/examples/multi-step-two');
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="grid gap-4" debug={true}>
        <div className="grid gap-4 md:grid-cols-2">
          <Bio />
        </div>
        <div className="flex flex-wrap gap-4">
          <Button type="submit" className="button full primary">
            Finish
          </Button>
          <Button className="button mini secondary" onClick={handlePrevious}>
            Back to previous step
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default StepThree;
