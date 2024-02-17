import { useRouter } from 'next/router';
import { HeaderSteps, StepOne, StepThree, StepTwo } from '.';

const MultiStepForm = () => {
  // Switch between URL fragments
  const router = useRouter();
  const fragment = router.asPath.split('#')[1] || 'step1';

  const switchStep = () => {
    switch (fragment) {
      case 'step1':
        return StepOne;
      case 'step2':
        return StepTwo;
      case 'step3':
        return StepThree;
      default:
        return null;
    }
  };
  const Form = switchStep();

  return (
    <div className="md:col-span-2 bg-white p-4 rounded-md">
      <HeaderSteps step={fragment} />
      <Form />
    </div>
  );
};

export default MultiStepForm;
