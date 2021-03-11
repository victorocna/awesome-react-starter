import { useRouter } from 'next/router';
import { Link } from '.';

const MenuItem = ({ icon, href, children }) => {
  const router = useRouter();
  const { pathname } = router;

  const classes = ['text-gray-900 hover:text-accent'];
  if (pathname === href) {
    // menu item active styles
    classes.push('text-accent');
  }

  return (
    <li className="menu-item text-gray-400 flex flex-wrap items-center space-x-3">
      <div className="w-4 flex justify-center text-sm">
        <i className={icon}></i>
      </div>
      <Link href={href} className={classes.join(' ')}>
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
