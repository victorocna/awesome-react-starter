import { NoSsr } from '@components';
import Dropdown from './Dropdown';

const AsyncDropdown = ({ children, status, ...props }) => {
  const icon = (
    <>
      {status === 'loading' && <img src="/icons/loading.gif" className="m-0 h-6 w-6" />}
      {status === 'error' && <i className="fas fa-exclamation-triangle text-red-600"></i>}
      {status === 'success' && <i className="fas fa-chevron-down"></i>}
    </>
  );

  return (
    <NoSsr>
      <Dropdown icon={icon} {...props}>
        {children}
      </Dropdown>
    </NoSsr>
  );
};

export default AsyncDropdown;
