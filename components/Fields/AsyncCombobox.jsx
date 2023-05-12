import { useState } from 'react';
import { NoSsr } from '..';
import Combobox from './Combobox';

const AsyncCombobox = ({ children, status, ...props }) => {
  const [selected, setSelected] = useState(false);
  const handleSelect = () => {
    setSelected(true);
  };

  const Icon = () => {
    // Show default icon if the user has just selected an item
    if (selected) {
      return <i className="fas fa-chevron-down" />;
    }
    // Show icons based on status
    return (
      <>
        {status === 'loading' && <img src="/icons/loading.gif" className="w-6 h-6 m-0" />}
        {status === 'error' && <i className="fas fa-exclamation-triangle text-red-600"></i>}
        {status === 'success' && <i className="fas fa-chevron-down" />}
      </>
    );
  };

  return (
    <NoSsr>
      <Combobox icon={<Icon />} status={status} onSelect={handleSelect} {...props}>
        {children}
      </Combobox>
    </NoSsr>
  );
};

export default AsyncCombobox;
