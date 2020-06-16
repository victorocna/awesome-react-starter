import React from 'react';
import { useField } from 'formik';

const Help = ({ name, help }) => {
  // eslint-disable-next-line
  const [field, meta] = useField(name);
  if (meta.touched && meta.error) {
    return <div className="animated fadeIn text-red-700">{meta.error}</div>;
  }
  if (React.isValidElement(help)) {
    return help;
  }
  if (help) {
    return <div className="text-gray-700">{help}</div>;
  }
  return false;
};

export default Help;
