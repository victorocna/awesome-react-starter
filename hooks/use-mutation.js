import { extractError, isRequestCanceled } from '@functions';
import { toaster } from '@lib';
import { useQueryClient, useMutation as useQueryMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

/**
 * Custom hook for useMutation
 *
 * @param {Function} fn
 * @param {Object} options
 * @returns {Object} Returns the mutation function, status and others
 * @see https://tanstack.com/query/latest/docs/framework/react/reference/useMutation
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
  const mutation = useQueryMutation({
    mutationFn: fn,
    onSuccess: (data) => {
      if (invalidateQueries) {
        queryClient.invalidateQueries({ queryKey: invalidateQueries });
      }
      if (data?.message) {
        toaster.success(data.message);
      }
      if (redirectOnSuccess) {
        router.push(redirectOnSuccess);
      }
      if (typeof successCallback === 'function') {
        successCallback(data);
      }
    },
    onError: (err) => {
      if (isRequestCanceled(err) || err?.__redirectToLogin) {
        return;
      }
      const { message } = extractError(err);
      if (message) {
        toaster.error(message);
      }
      if (typeof errorCallback === 'function') {
        errorCallback(err);
      }
    },
    ...rest,
  });

  return mutation;
};

export default useMutation;
