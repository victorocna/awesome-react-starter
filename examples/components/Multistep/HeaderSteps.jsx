import { HeaderStep } from '.';

const HeaderSteps = ({ step }) => {
  // step is in the form step1, step2, step3
  const actualStep = Number(step.split('step')[1]);

  return (
    <div className="grid grid-cols-3 gap-4 bg-white py-4">
      <HeaderStep isActive={actualStep >= 1}>
        <span>1. Step one</span>
      </HeaderStep>
      <HeaderStep isActive={actualStep >= 2}>
        <span>2. Step two</span>
      </HeaderStep>
      <HeaderStep isActive={actualStep >= 3}>
        <span>3. Step three</span>
      </HeaderStep>
    </div>
  );
};

export default HeaderSteps;
