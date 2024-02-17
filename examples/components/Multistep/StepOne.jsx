import { Button } from '@components';
import { Form } from '@components/Formik';
import { formCookie, router } from '@lib';
import { Formik } from 'formik';
import { initialValues, validationSchema } from '../../models/multi-step-one';
import { County, Email, Fullname, SomeFilter, Terms } from '../Formik';

const StepOne = () => {
  const handleSubmit = (data) => {
    // Save values in a persistent store and move to next step
    formCookie.set('multi-step-form', data);
    // Move to next step
    router.push('/examples/multi-step-two');
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="grid gap-4" debug={true}>
        <Fullname />
        <div className="grid gap-4 md:grid-cols-2">
          <SomeFilter />
          <County />
        </div>
        <Email />
        <Terms />
        <Button className="button full primary" type="submit">
          Continue
        </Button>
      </Form>
    </Formik>
  );
};

export default StepOne;
