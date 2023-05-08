import Combobox from './Combobox';

const AsyncCombobox = ({ children, status, id, ...props }) => {
  const key = `async-combobox-${id}-${status}`;
  if (status === 'loading') {
    return (
      <Combobox key={key} disabled={true}>
        <option value="">Loading...</option>
      </Combobox>
    );
  }

  if (status === 'error') {
    return (
      <Combobox key={key} disabled={true}>
        <option value="">Error...</option>
      </Combobox>
    );
  }

  return (
    <Combobox key={key} {...props}>
      {children}
    </Combobox>
  );
};

export default AsyncCombobox;
