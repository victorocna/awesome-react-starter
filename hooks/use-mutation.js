import { useRouter } from 'next/router';
import { string, func, object } from 'prop-types';
import { useMutation as useQueryMutation, useQueryClient } from 'react-query';
import { toaster } from '../functions';

/**
 * Custom hook for useMutation
 *
 * @param {String} key
 * @param {Function} fn
 * @param {Object} options
 */
const useMutation = (key, fn, options) => {
  const {
    success,
    successCallback,
    error,
    errorCallback,
    redirect,
    ...rest // pass your own options
  } = options;

  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useQueryMutation(fn, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
      if (success) {
        toaster.success(success);
      }
      if (redirect) {
        router.push(redirect);
      }
      if (typeof successCallback === 'function') {
        successCallback();
      }
    },
    onError: () => {
      if (error) {
        toaster.error(error);
      }
      if (typeof errorCallback === 'function') {
        errorCallback();
      }
    },
    ...rest,
  });

  return mutation;
};

useMutation.PropTypes = {
  key: string,
  fn: func,
  options: object,
};

useMutation.defaultProps = {
  key: '',
  func: () => {},
  options: {},
};

export default useMutation;
