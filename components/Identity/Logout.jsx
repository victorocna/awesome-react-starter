import { Button } from '@components';
import { logout } from '@api/identity';

const Logout = () => {
  return (
    <Button className="button full primary" onClick={logout}>
      Logout
    </Button>
  );
};

export default Logout;
