import { HeaderStep } from '.';

const HeaderSteps = ({ step }) => {
  return (
    <div className="grid grid-cols-3 gap-4 bg-white py-4">
      <HeaderStep isActive={Number(step) >= 1}>
        <span>1. Step one</span>
      </HeaderStep>
      <HeaderStep isActive={Number(step) >= 2}>
        <span>2. Step two</span>
      </HeaderStep>
      <HeaderStep isActive={Number(step) >= 3}>
        <span>3. Step three</span>
      </HeaderStep>
    </div>
  );
};

export default HeaderSteps;
