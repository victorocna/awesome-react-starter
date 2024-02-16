import { Button } from '@components';
import { Form } from '@components/Formik';
import { router } from '@lib';
import { Formik } from 'formik';
import { initialValues, validationSchema } from '../../models/multi-step-two';
import { Age, Country, DateOfBirth, UsState } from '../Formik';

const StepTwo = () => {
  const handleSubmit = () => {
    // Save values in a persistent store and move to next step
  };
  const handlePrevious = () => {
    // Move to previous step
    router.push('/examples/multistep-one');
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="grid gap-4">
        <div className="grid gap-4 md:grid-cols-2">
          <Country />
          <UsState />
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <DateOfBirth />
          <Age />
        </div>
        <Button className="mr-4" onClick={handlePrevious}>
          Back to previous step
        </Button>
        <Button type="submit" className="button full primary">
          Continue
        </Button>
      </Form>
    </Formik>
  );
};

export default StepTwo;
