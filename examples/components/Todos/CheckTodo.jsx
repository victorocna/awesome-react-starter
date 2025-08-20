import { Checkbox } from '@components/Fields';
import { useMutation } from '@hooks';
import { checkTodo } from '../../api/todo';

const CheckTodo = ({ id, done }) => {
  const mutation = useMutation(checkTodo, {
    invalidateQueries: ['inf', 'admin/todos'],
  });

  const handleClick = () => {
    mutation.mutate({ id, done });
  };

  return <Checkbox value={done} checked={done} onChange={handleClick} />;
};

export default CheckTodo;
