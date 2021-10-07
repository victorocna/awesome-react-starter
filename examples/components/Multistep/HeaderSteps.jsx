import { HeaderStep } from '.';

const HeaderSteps = ({ step }) => (
  <div className="bg-white p-4 grid gap-4 grid-cols-3 border-t border-b">
    <HeaderStep isActive={step >= 0}>
      <span>1. Step one</span>
    </HeaderStep>
    <HeaderStep isActive={step >= 1}>
      <span>2. Step two</span>
    </HeaderStep>
    <HeaderStep isActive={step >= 2}>
      <span>3. Step three</span>
    </HeaderStep>
  </div>
);

export default HeaderSteps;
