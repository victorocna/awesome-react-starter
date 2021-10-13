import React from 'react';

const Field = ({ as, ...props }) => {
  return React.createElement(as, props);
};

export default Field;
