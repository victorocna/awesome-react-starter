import { Button } from '..';
import { logout } from '../../api';

const Logout = () => (
  <Button variant="primary" className="ml-2" onClick={logout}>
    Logout
  </Button>
);

export default Logout;
