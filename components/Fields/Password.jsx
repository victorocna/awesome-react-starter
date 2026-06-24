import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@components/ui/input-group';
import { Eye, EyeOffIcon } from 'lucide-react';
import { useState } from 'react';

const Password = (props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const type = isPasswordVisible ? 'text' : 'password';

  return (
    <InputGroup>
      <InputGroupInput type={type} autoComplete="current-password" {...props} />
      <InputGroupAddon align="inline-end">
        <InputGroupButton
          aria-label="Copy"
          title="Copy"
          size="icon-xs"
          onClick={() => {
            setIsPasswordVisible(!isPasswordVisible);
          }}
        >
          {isPasswordVisible ? <EyeOffIcon /> : <Eye />}
        </InputGroupButton>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default Password;
