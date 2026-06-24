import {
  FieldDescription,
  FieldGroup,
  FieldLegend,
  FieldSet as FieldsetPrimitive,
} from '@components/ui/field';

const Fieldset = ({ label, help, children }) => {
  return (
    <FieldsetPrimitive>
      {label && <FieldLegend>{label}</FieldLegend>}
      {help && <FieldDescription>{help}</FieldDescription>}
      <FieldGroup>{children}</FieldGroup>
    </FieldsetPrimitive>
  );
};

export default Fieldset;
