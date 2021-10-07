import { Checkbox } from '../../../components/Fields';

const TodoListLoading = () => {
  const mock = [1, 2, 3]; // dummy data
  const showTodo = (mock) => {
    return (
      <div key={`todo-list-loading-${mock}`} className="flex items-center gap-2 animate-pulse">
        <Checkbox />
        <div className="h-4 my-1 bg-gray-300 rounded-lg w-1/2"></div>
      </div>
    );
  };

  return <div className="grid gap-2">{mock.map(showTodo)}</div>;
};

export default TodoListLoading;
