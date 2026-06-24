import {
  FieldDescription,
  FieldError,
  FieldLabel,
  Field as FieldPrimitive,
} from '@components/ui/field';
import { cn } from '@lib/utils';
import { Controller, useFormContext } from 'react-hook-form';

const Field = ({ as: Component, name, label, help, orientation, ...rest }) => {
  const { control } = useFormContext();

  const render = ({ field, fieldState }) => {
    return (
      <FieldPrimitive
        data-invalid={fieldState.invalid}
        orientation={orientation}
        className={cn(orientation === 'horizontal' && 'flex-row-reverse justify-end gap-3')}
      >
        {label && <FieldLabel htmlFor={name}>{label}</FieldLabel>}
        {help && <FieldDescription>{help}</FieldDescription>}
        <Component {...field} id={field.name} aria-invalid={fieldState.invalid} {...rest} />
        {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
      </FieldPrimitive>
    );
  };

  return <Controller name={name} control={control} render={render} />;
};

export default Field;
