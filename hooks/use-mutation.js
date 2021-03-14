import { useMutation as useQueryMutation, useQueryClient } from 'react-query';
import { toaster } from '../functions';

const useMutation = (key, fn, options) => {
  const queryClient = useQueryClient();
  const mutation = useQueryMutation(fn, {
    onSuccess: () => {
      queryClient.invalidateQueries(key);
    },
    onError: () => {
      toaster.error('Error! Something went wrong, please try again!');
    },
    ...options,
  });

  return mutation;
};

export default useMutation;
