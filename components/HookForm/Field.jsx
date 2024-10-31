import { Controller, useFormContext } from 'react-hook-form';
import Fieldset from './Fieldset';

const Field = ({ name, label, as: Component, ...props }) => {
  const { control } = useFormContext();

  // Render the field component with onChange, onBlur and value props
  const render = ({ field }) => {
    return <Component {...props} {...field} />;
  };

  if (!label) {
    return <Controller name={name} control={control} render={render} />;
  }

  return (
    <Fieldset name={name} label={label}>
      <Controller id={name} name={name} control={control} render={render} />
    </Fieldset>
  );
};

export default Field;
