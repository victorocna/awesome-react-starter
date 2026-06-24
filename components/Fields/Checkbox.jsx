import React from 'react';

/**
 * A standard Checkbox component for forms.
 * Maps the `value` prop to the HTML input's `checked` attribute for seamless integration with form wrappers.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The label text or nodes to display next to the checkbox.
 * @param {boolean} [props.value] - The value of the checkbox (mapped to checked state).
 * @param {boolean} [props.checked] - The explicit checked state of the checkbox.
 * @returns {React.ReactElement} The rendered checkbox element.
 */
const Checkbox = ({ children, value, checked, ...props }) => {
  return (
    <div className="mt-2">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          className="checkbox"
          checked={checked !== undefined ? checked : !!value}
          {...props}
        />
        <span className="ml-2">{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
