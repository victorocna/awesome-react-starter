import { Checkbox } from '@components/Fields';

const TodoListLoading = () => {
  const mock = [1, 2, 3]; // dummy data
  const showTodo = (mock) => {
    return (
      <div key={`todo-list-loading-${mock}`} className="flex animate-pulse items-center gap-2">
        <Checkbox />
        <div className="my-1 h-4 w-1/2 rounded-lg bg-gray-300"></div>
      </div>
    );
  };

  return <div className="grid gap-2">{mock.map(showTodo)}</div>;
};

export default TodoListLoading;
