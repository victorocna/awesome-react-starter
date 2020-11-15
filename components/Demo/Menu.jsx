import { Link } from '..';
import { Logout } from '.';

const Menu = () => (
  <div className="flex items-center">
    <Link href="/dashboard" className="ml-2">
      Dashboard
    </Link>
    <Link href="/profile" className="ml-2">
      My profile
    </Link>
    <Logout />
  </div>
);

export default Menu;