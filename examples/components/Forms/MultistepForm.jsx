import { useState } from 'react';
import { Formik, Form } from 'formik';
import { HeaderSteps, StepOne, StepTwo, StepThree } from '../Multistep';
import { validationSchema, initialValues } from '../../models/multi-step';
import { toaster } from '../../../lib';

const MultistepForm = () => {
  const [step, setStep] = useState(0);
  const previous = () => setStep((step) => step - 1);
  const next = () => setStep((step) => step + 1);

  const renderStep = (step) => {
    const formProps = {};
    formProps.previous = previous;
    formProps.next = next;

    switch (step) {
      case 0:
        return <StepOne {...formProps} />;
      case 1:
        return <StepTwo {...formProps} />;
      case 2:
        return <StepThree {...formProps} />;
      default:
        return null;
    }
  };

  const stepValidation = (step) => {
    return validationSchema[step];
  };
  const stepValues = (step) => {
    return initialValues[step];
  };
  const handleSubmit = () => {
    const isLastStep = step === 2;
    if (isLastStep) {
      toaster.success('Multi step Formik form finished successfully');
    } else {
      return next();
    }
  };

  return (
    <article className="bg-white py-4">
      <HeaderSteps step={step} />
      <Formik
        validationSchema={stepValidation(step)}
        initialValues={stepValues(step)}
        onSubmit={handleSubmit}
      >
        <Form className="p-4">{renderStep(step)}</Form>
      </Formik>
    </article>
  );
};

export default MultistepForm;
