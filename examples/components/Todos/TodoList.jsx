import { useInfiniteQuery } from '../../../hooks';
import { TodoListError, TodoListLoading, TodoListSuccess } from '.';
import { LoadMore } from '../../../components';

const TodoList = ({ options }) => {
  const { data, status, ...props } = useInfiniteQuery('todos', options);

  return (
    <div className="flex-1">
      {status === 'loading' && <TodoListLoading />}
      {status === 'error' && <TodoListError />}
      {status === 'success' && (
        <>
          <TodoListSuccess {...data} />
          <LoadMore {...props} />
        </>
      )}
    </div>
  );
};

export default TodoList;
