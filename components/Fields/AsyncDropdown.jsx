import Dropdown from './Dropdown';

const AsyncDropdown = ({ children, status, ...props }) => {
  const icon = (
    <>
      {status === 'loading' && <img src="/icons/loading.gif" className="w-6 h-6 m-0" />}
      {status === 'error' && <i className="fas fa-exclamation-triangle text-red-600"></i>}
      {status === 'success' && <i className="fas fa-chevron-down" />}
    </>
  );

  return (
    <Dropdown icon={icon} {...props}>
      {children}
    </Dropdown>
  );
};

export default AsyncDropdown;
