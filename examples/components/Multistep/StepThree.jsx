import { Button } from '@components';
import { Form } from '@components/Formik';
import { router } from '@lib';
import { Formik } from 'formik';
import { initialValues, validationSchema } from '../../models/multi-step-two';
import { Bio } from '../Formik';

const StepThree = () => {
  const handleSubmit = () => {
    // Save values in a persistent store and move to next step
  };
  const handlePrevious = () => {
    // Move to previous step
    router.push('/examples/multistep-two');
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Bio />
        </div>
        <Button className="mr-4" onClick={handlePrevious}>
          Back to previous step
        </Button>
        <Button type="submit" className="button full primary">
          Finish
        </Button>
      </Form>
    </Formik>
  );
};

export default StepThree;
