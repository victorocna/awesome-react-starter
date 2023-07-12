import { HeaderStep } from '.';

const HeaderSteps = ({ step }) => (
  <div className="grid grid-cols-3 gap-4 border-t border-b bg-white p-4">
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
