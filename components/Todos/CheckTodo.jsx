import { useMutation, useQueryClient } from 'react-query';
import { Checkbox } from '../Forms';
import { checkTodo } from '../../api/todo';
import { toaster } from '../../functions';

const CheckTodo = ({ id, done }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(checkTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      toaster.success('Todo status updated');
    },
    onError: () => {
      toaster.error('Error! Cannot update todo status');
    },
  });

  const handleClick = () => {
    mutation.mutate({ id, done });
  };

  return <Checkbox value={done} onClick={handleClick} />;
};

export default CheckTodo;
