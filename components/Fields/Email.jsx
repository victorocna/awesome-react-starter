import { Input } from '@components/ui/input';

const Email = (props) => {
  return <Input type="email" inputMode="email" autoComplete="username" {...props} />;
};

export default Email;
