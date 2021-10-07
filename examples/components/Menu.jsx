import { Link } from '../../components';

const Menu = () => (
  <div className="flex items-center">
    <Link href="/login" className="ml-2">
      Login
    </Link>
    <Link href="/terms" className="ml-2">
      Terms
    </Link>
  </div>
);

export default Menu;
