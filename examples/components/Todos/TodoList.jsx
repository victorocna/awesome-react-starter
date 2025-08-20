import { LoadMoreOnClick } from '@components/Buttons';
import { useInfiniteQuery } from '@hooks';
import TodoListError from './TodoListError';
import TodoListLoading from './TodoListLoading';
import TodoListSuccess from './TodoListSuccess';

const TodoList = ({ options }) => {
  const { data, status, ...props } = useInfiniteQuery('admin/todos', options);

  return (
    <div className="flex-1">
      {status === 'pending' && <TodoListLoading />}
      {status === 'error' && <TodoListError />}
      {status === 'success' && (
        <>
          <TodoListSuccess {...data} />
          <LoadMoreOnClick {...props} />
        </>
      )}
    </div>
  );
};

export default TodoList;
