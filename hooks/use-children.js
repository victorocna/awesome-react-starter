import { flatten, isArray } from 'lodash';
import { Children, isValidElement } from 'react';

const useChildren = (children) => {
  const childrenArray = isArray(children) ? children : [children];
  const elements = flatten(childrenArray).filter(isValidElement);

  return Children.map(elements, ({ props }) => {
    const { children, label, value, ...rest } = props;
    return {
      label: label || children,
      value: value || children,
      ...rest,
    };
  }).filter(({ hidden }) => !hidden);
};

export default useChildren;
