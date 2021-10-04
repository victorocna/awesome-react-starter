import { Button } from '..';
import { logout } from '../../api';

const Logout = () => {
  return (
    <Button className="button full primary" onClick={logout}>
      Logout
    </Button>
  );
};

export default Logout;
