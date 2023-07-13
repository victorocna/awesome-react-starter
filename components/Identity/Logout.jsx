import { logout } from '@api/identity';
import { Button } from '@components';

const Logout = () => {
  return (
    <Button className="button full primary" onClick={logout}>
      Logout
    </Button>
  );
};

export default Logout;
