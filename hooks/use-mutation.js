import { toaster } from '@lib';
import { useRouter } from 'next/router';
import { useQueryClient, useMutation as useQueryMutation } from 'react-query';

/**
 * Custom hook for useMutation
 *
 * @param {String} key
 * @param {Function} fn
 * @param {Object} options
 * @returns {Object} Returns the mutation function, status and others
 * @see https://react-query.tanstack.com/reference/useMutation
 */
const useMutation = (fn, options = {}) => {
  const {
    successCallback,
    errorCallback,
    redirectOnSuccess,
    invalidateQueries,
    ...rest // pass your own options
  } = options;

  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useQueryMutation(fn, {
    onSuccess: (data) => {
      if (invalidateQueries) {
        queryClient.invalidateQueries(invalidateQueries);
      }
      if (data?.message) {
        toaster.success(data?.message);
      }
      if (redirectOnSuccess) {
        router.push(redirectOnSuccess);
      }
      if (typeof successCallback === 'function') {
        successCallback();
      }
    },
    onError: (err) => {
      if (err?.message) {
        toaster.error(err?.message);
      }
      if (typeof errorCallback === 'function') {
        errorCallback();
      }
    },
    ...rest,
  });

  return mutation;
};

export default useMutation;
