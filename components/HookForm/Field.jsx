import { Controller, useFormContext } from 'react-hook-form';
import Fieldset from './Fieldset';

const Field = ({ as: Component, name, label, help, isCheckbox, ...rest }) => {
  const { control } = useFormContext();

  const render = ({ field }) => {
    // Extract a normalized "next value" from either an event or a raw value
    // For checkboxes we coerce to boolean; for others we pass the value through
    const extractNext = (input) => {
      if (input && typeof input === 'object' && 'target' in input) {
        return isCheckbox ? !!input.target.checked : input.target.value;
      }
      return isCheckbox ? !!input : input;
    };

    // Avoid redundant state updates to prevent unnecessary re-renders
    const handleChange = (input) => {
      const next = extractNext(input);
      const prev = isCheckbox ? !!field.value : field.value;
      if (next === prev) {
        return;
      }
      field.onChange(next);
    };

    // Base props that should always be present
    const baseProps = {
      id: name,
      name,
      onBlur: field.onBlur,
      ref: field.ref,
      ...rest,
    };

    // Checkbox vs. everything else mapping
    // For non-checkbox we spread "field" to keep value, name, ref, etc. in sync with RHF
    const compProps = isCheckbox
      ? { ...baseProps, checked: !!field.value, onChange: handleChange }
      : { ...baseProps, ...field, onChange: handleChange };

    return <Component {...compProps} />;
  };

  const controlEl = <Controller name={name} control={control} render={render} />;

  // If there's no label/help, render only the field
  if (!label && !help) {
    return controlEl;
  }

  // Otherwise wrap in Fieldset for accessible labeling and help text
  return (
    <Fieldset name={name} label={label} help={help}>
      {controlEl}
    </Fieldset>
  );
};

export default Field;
