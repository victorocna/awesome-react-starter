import { Controller, useFormContext } from 'react-hook-form';

const Field = ({ name, as: Component, ...props }) => {
  const { control } = useFormContext();
  const render = ({ field }) => {
    return <Component {...field} {...props} />;
  };

  return <Controller name={name} control={control} render={render} />;
};

export default Field;
