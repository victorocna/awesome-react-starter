import {
  SelectContent,
  Select as SelectPrimitive,
  SelectTrigger,
  SelectValue,
} from '@components/ui/select';

const Select = ({ children, placeholder, onChange, ...props }) => {
  return (
    <SelectPrimitive onValueChange={onChange} {...props}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </SelectPrimitive>
  );
};

export default Select;
