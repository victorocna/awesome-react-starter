import { Checkbox } from '../Forms';

const TodoListError = () => {
  const mock = [1, 2, 3]; // dummy data
  const showTodo = (mock) => {
    return (
      <div key={`todo-list-error-${mock}`} className="flex items-center space-x-2">
        <Checkbox />
        <div className="h-4 my-1 bg-gray-300 rounded-lg w-1/2"></div>
      </div>
    );
  };

  return (
    <div className="space-y-2">
      {mock.map(showTodo)}
      <h2 className="text-red-600 font-semibold">Error! Cannot read todo list</h2>
    </div>
  );
};

export default TodoListError;
