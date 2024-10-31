import { useMutation } from '@hooks';
import { deleteTodo } from '../../api/todo';

const RemoveTodo = ({ id }) => {
  const mutation = useMutation(deleteTodo, {
    invalidateQueries: 'admin/todos',
  });

  const handleDelete = () => {
    mutation.mutate(id);
  };

  return (
    <button
      type="button"
      className="mx-1 flex rounded border font-semibold text-gray-400 hover:border-accent hover:text-accent"
      onClick={handleDelete}
    >
      <i className="fas fa-times px-2 py-1.5"></i>
    </button>
  );
};

export default RemoveTodo;
