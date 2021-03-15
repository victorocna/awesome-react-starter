import router from 'next/router';
import { useMutation as useQueryMutation, useQueryClient } from 'react-query';
import { toaster } from '../functions';

const useMutation = (key, fn, options) => {
  const { success, error, redirect, ...rest } = options;

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
    },
    onError: () => {
      if (error) {
        toaster.error(error);
      }
    },
    ...rest,
  });

  return mutation;
};

export default useMutation;
