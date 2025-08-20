import { Controller, useFormContext } from 'react-hook-form';
import Fieldset from './Fieldset';

const Field = ({ as: Component, help, id, label, name, ...props }) => {
  const { control } = useFormContext();

  // Render the field component with onChange, onBlur and value props
  const render = ({ field }) => {
    return <Component {...props} {...field} id={id || name} name={name} />;
  };

  // Show the field component without a fieldset when no label or help is provided
  if (!label && !help) {
    return <Controller name={name} control={control} render={render} />;
  }

  return (
    <Fieldset name={name} label={label} help={help}>
      <Controller name={name} control={control} render={render} />
    </Fieldset>
  );
};

export default Field;
