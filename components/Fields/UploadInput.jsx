// UploadInput.jsx
import React from 'react';
import { useField, useFormikContext } from 'formik';

const UploadInput = ({ ...props }) => {
  const [field, meta] = useField(props.name);
  const { setFieldValue } = useFormikContext();

  const handleChange = (event) => {
    // Use event.currentTarget.files to handle multiple files if needed
    const file = event.target.files[0];
    setFieldValue(field.name, file);
  };

  return (
    <>
      <input type="file" name={props.name} onChange={handleChange} />
      {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
    </>
  );
};

export default UploadInput;
