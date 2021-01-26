import { Toaster as ToasterBox } from 'react-hot-toast';

const Toaster = () => {
  const toastOptions = {
    duration: 6000,
    className: 'react-hot-toast',
    success: {
      style: {
        background: '#059669',
        color: '#fff',
      },
    },
    error: {
      style: {
        background: '#DC2626',
        color: '#fff',
      },
    },
  };

  return <ToasterBox toastOptions={toastOptions} />;
};

export default Toaster;
