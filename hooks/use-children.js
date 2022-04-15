import { Children, isValidElement } from 'react';
import { isArray, flatten } from 'lodash';

const useChildren = (children) => {
  const childrenArray = isArray(children) ? children : [children];
  const elements = flatten(childrenArray).filter(isValidElement);

  return Children.map(elements, ({ props }) => {
    const { value, children, ...rest } = props;
    return {
      value: value || children,
      label: children,
      ...rest,
    };
  }).filter(({ hidden }) => !hidden);
};

export default useChildren;
