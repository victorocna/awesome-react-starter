import { classnames } from '@lib';
import { forwardRef } from 'react';

const Option = ({ children, isHover, ...props }, ref) => {
  return (
    <li ref={ref} className={classnames('px-3 py-1', isHover && 'bg-gray-200')} {...props}>
      {children}
    </li>
  );
};

export default forwardRef(Option);
