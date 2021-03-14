import { useMutation, useQueryClient } from 'react-query';
import { CheckTodo } from '.'
import { deleteTodo } from '../../api/todo';
import { getTodoClasses } from '../../styles/todo';
import { toaster } from '../../functions';

const TodoListSuccess = ({ pages }) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      toaster.success('Todo removed successfully');
    },
    onError: () => {
      toaster.error('Error! Cannot remove your todo');
    },
  });

  const showTodo = ({ _id: id, name, done }) => {
    const handleDelete = () => {
      mutation.mutate(id);
    };

    return (
      <div key={id} className="todo flex items-center space-x-2">
        <CheckTodo id={id} done={done} />
        <span className={getTodoClasses(done)}>{name}</span>
        <button className="mx-1 text-red-800 font-semibold" onClick={handleDelete}>
          x
        </button>
      </div>
    );
  };

  return <div className="space-y-2">{pages.map(({ documents }) => documents.map(showTodo))}</div>;
};

export default TodoListSuccess;
