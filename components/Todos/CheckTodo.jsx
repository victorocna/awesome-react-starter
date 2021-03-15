import { Checkbox } from '../Forms';
import { checkTodo } from '../../api/todo';
import { useMutation } from '../../hooks';

const CheckTodo = ({ id, done }) => {
  const mutation = useMutation('todos', checkTodo, {
    success: 'Todo status updated',
    error: 'Error! Cannot update todo status',
  });
  const handleClick = () => {
    mutation.mutate({ id, done });
  };

  return <Checkbox value={done} onClick={handleClick} />;
};

export default CheckTodo;
