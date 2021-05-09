import React from 'react';
import { useField, useFormikContext } from 'formik';

const Help = ({ name, help }) => {
  // eslint-disable-next-line
  const [field, meta] = useField(name);
  const { submitCount } = useFormikContext();

  if (meta.touched && meta.error && submitCount) {
    return <div className="animated fadeIn text-sm text-red-700 first-letter">{meta.error}</div>;
  }
  if (React.isValidElement(help)) {
    return help;
  }
  if (help) {
    return <div className="text-sm text-gray-700">{help}</div>;
  }
  return false;
};

export default Help;
