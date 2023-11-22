import { classnames } from '@lib';
import { Children, cloneElement } from 'react';

const Overflow = ({ children }) => {
  const append = (child) => {
    const className = classnames(child.props.className, 'truncate');
    const props = {
      ...child.props,
      title: child.props.children,
      className,
    };
    return cloneElement(child, props);
  };

  return <div className="overflow-hidden truncate">{Children.map(children, append)}</div>;
};

export default Overflow;
