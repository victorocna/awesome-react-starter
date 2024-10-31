import { HookForm } from '@components/HookForm';
import { formCookie, router } from '@lib';
import { merge } from 'lodash';
import { initialValues, validationSchema } from '../../models/multi-step-three';
import StepThreeForm from './StepThreeForm';

const StepThree = () => {
  const cookieValues = formCookie.get('multi-step-form');

  const handleSubmit = (data) => {
    // Save values in a persistent store and submit form
    formCookie.append('multi-step-form', data);
    // To implement: Remove cookie on success
  };
  const goBack = () => {
    // Move to previous step
    router.push('/examples/multi-step-form#step2');
  };

  return (
    <HookForm
      validationSchema={validationSchema}
      initialValues={merge(initialValues, cookieValues)}
      onSubmit={handleSubmit}
    >
      <StepThreeForm goBack={goBack} />
    </HookForm>
  );
};

export default StepThree;
