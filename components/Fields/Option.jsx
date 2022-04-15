import { forwardRef } from 'react';
import { classnames } from '../../lib';

const Option = ({ children, isHover, ...props }, ref) => {
  return (
    <li ref={ref} className={classnames('py-1 px-3', isHover && 'bg-gray-400')} {...props}>
      {children}
    </li>
  );
};

export default forwardRef(Option);
