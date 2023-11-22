import React from 'react';

const Fieldset = ({ label, name, help, children }) => {
  return (
    <fieldset>
      {label && (
        <label htmlFor={name} className="form-label mb-0 w-full cursor-pointer">
          {label}
        </label>
      )}
      {children}
      {help && <div className="form-help text-sm text-secondary">{help}</div>}
    </fieldset>
  );
};

export default Fieldset;
