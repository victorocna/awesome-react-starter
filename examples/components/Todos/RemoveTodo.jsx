import { useMutation } from '../../../hooks';
import { deleteTodo } from '../../api/todo';

const RemoveTodo = ({ id }) => {
  const mutation = useMutation(deleteTodo, {
    invalidateQueries: 'todos',
  });

  const handleDelete = () => {
    mutation.mutate(id);
  };

  return (
    <button
      type="button"
      className="mx-1 text-gray-400 hover:text-accent hover:border-accent font-semibold border rounded flex px-1"
      onClick={handleDelete}
    >
      x
    </button>
  );
};

export default RemoveTodo;
