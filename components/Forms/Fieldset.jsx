import React from 'react';
import { Help } from '.';

const Fieldset = ({ label, help, name, className, ...props }) => {
  return (
    <fieldset className={className}>
      <label className="w-full cursor-pointer">
        {label}
        {props.children}
        <Help name={name} help={help} />
      </label>
    </fieldset>
  );
};

export default Fieldset;
