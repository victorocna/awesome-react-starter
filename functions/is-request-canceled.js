import axios from 'axios';

const isRequestCanceled = (err) => {
  return (
    err?.code === 'ERR_CANCELED' ||
    err?.name === 'CanceledError' ||
    axios.isCancel?.(err) ||
    err?.message === 'canceled' ||
    err?.cause?.name === 'AbortError'
  );
};

export default isRequestCanceled;
