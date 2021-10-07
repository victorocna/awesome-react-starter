import { useRouter } from 'next/router';
import { Link } from '.';
import { classnames } from '../lib';

const MenuItem = ({ href, children, level }) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <Link href={href}>
      <a
        className={classnames(
          'menu-item px-8 py-2 hover:bg-gray-100 cursor-pointer',
          'no-underline text-gray-900',
          level === 1 ? 'pl-8' : 'pl-12',
          pathname === href && 'text-primary font-semibold'
        )}
      >
        {children}
      </a>
    </Link>
  );
};

export default MenuItem;
