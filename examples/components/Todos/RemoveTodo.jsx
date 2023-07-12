import { useMutation } from '@hooks';
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
      className="mx-1 flex rounded border px-1 font-semibold text-gray-400 hover:border-accent hover:text-accent"
      onClick={handleDelete}
    >
      x
    </button>
  );
};

export default RemoveTodo;
