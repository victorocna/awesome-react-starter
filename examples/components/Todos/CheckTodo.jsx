import { Checkbox } from '../../../components/Fields';
import { checkTodo } from '../../api/todo';
import { useMutation } from '../../../hooks';

const CheckTodo = ({ id, done }) => {
  const mutation = useMutation(checkTodo, {
    invalidateQueries: 'todos',
  });
  const handleClick = () => {
    mutation.mutate({ id, done });
  };

  return <Checkbox value={done} onClick={handleClick} />;
};

export default CheckTodo;
