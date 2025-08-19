import { classnames } from '@lib';

const Option = ({ children, isHover, ref, ...props }) => {
  return (
    <li ref={ref} className={classnames('px-3 py-1', isHover && 'bg-gray-200')} {...props}>
      {children}
    </li>
  );
};

export default Option;
