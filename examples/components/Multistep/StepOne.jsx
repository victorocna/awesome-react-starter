import { HookForm } from '@components/HookForm';
import { formCookie, router } from '@lib';
import { merge } from 'lodash';
import { initialValues, validationSchema } from '../../models/multi-step-one';
import StepOneForm from './StepOneForm';

const StepOne = () => {
  const cookieValues = formCookie.get('multi-step-form');

  const handleSubmit = (data) => {
    // Save values in a persistent store and move to next step
    formCookie.set('multi-step-form', data);
    // Move to next step
    router.push('/examples/multi-step-form#step2');
  };

  return (
    <HookForm
      validationSchema={validationSchema}
      initialValues={merge(initialValues, cookieValues)}
      onSubmit={handleSubmit}
    >
      <StepOneForm />
    </HookForm>
  );
};

export default StepOne;
