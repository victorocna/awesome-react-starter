import { HookForm } from '@components/HookForm';
import { formCookie, router } from '@lib';
import { merge } from 'lodash';
import { initialValues, validationSchema } from '../../models/multi-step-two';
import StepTwoForm from './StepTwoForm';

const StepTwo = () => {
  const cookieValues = formCookie.get('multi-step-form');

  const handleSubmit = (data) => {
    // Save values in a persistent store and move to next step
    formCookie.append('multi-step-form', data);
    // Move to next step
    router.push('/examples/multi-step-form#step3');
  };
  const goBack = () => {
    // Move to previous step
    router.push('/examples/multi-step-form#step1');
  };

  return (
    <HookForm
      validationSchema={validationSchema}
      initialValues={merge(initialValues, cookieValues)}
      onSubmit={handleSubmit}
    >
      <StepTwoForm goBack={goBack} />
    </HookForm>
  );
};

export default StepTwo;
