import { NoSsr } from '@components';
import Combobox from './Combobox';

const AsyncCombobox = ({ children, status, ...props }) => {
  // Show icons based on status
  const Icon = () => {
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
      <Combobox icon={<Icon />} {...props}>
        {children}
      </Combobox>
    </NoSsr>
  );
};

export default AsyncCombobox;
