import Dropdown from './Dropdown';

const AsyncDropdown = ({ children, status, id, ...props }) => {
  const key = `async-dropdown-${id}-${status}`;
  if (status === 'loading') {
    return (
      <Dropdown key={key} disabled={true}>
        <option value="">Loading...</option>
      </Dropdown>
    );
  }

  if (status === 'error') {
    return (
      <Dropdown key={key} disabled={true}>
        <option value="">Error...</option>
      </Dropdown>
    );
  }

  return (
    <Dropdown key={key} {...props}>
      {children}
    </Dropdown>
  );
};

export default AsyncDropdown;
