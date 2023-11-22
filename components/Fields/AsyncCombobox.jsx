import { NoSsr } from '@components';
import { useState } from 'react';
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
        {status === 'loading' && <img src="/icons/loading.gif" className="m-0 h-6 w-6" />}
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
