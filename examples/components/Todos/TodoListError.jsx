import { Checkbox } from '@components/Fields';

const TodoListError = () => {
  const mock = [1, 2, 3]; // dummy data
  const showTodo = (mock) => {
    return (
      <div key={`todo-list-error-${mock}`} className="flex items-center gap-2">
        <Checkbox />
        <div className="my-1 h-4 w-1/2 rounded-lg bg-gray-300"></div>
      </div>
    );
  };

  return (
    <div className="grid gap-2">
      {mock.map(showTodo)}
      <h2 className="font-semibold text-red-600">Error! Cannot read todo list</h2>
    </div>
  );
};

export default TodoListError;
