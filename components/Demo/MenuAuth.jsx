import { Link } from '..';
import { Logout } from '.';

const MenuAuth = () => (
  <div className="flex items-center">
    <Link href="/dashboard" className="ml-2">
      Dashboard
    </Link>
    <Link href="/profile" className="ml-2">
      My profile
    </Link>
    <Link href="/multi-step" className="ml-2">
      Multi step
    </Link>
    <Logout />
  </div>
);

export default MenuAuth;
