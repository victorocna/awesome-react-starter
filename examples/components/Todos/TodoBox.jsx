import { useState } from 'react';
import AddTodo from './AddTodo';
import FilterTodos from './FilterTodos';
import SortTodos from './SortTodos';
import TodoList from './TodoList';

const TodoBox = () => {
  const [options, setOptions] = useState({});

  return (
    <div className="flex flex-col gap-4 rounded bg-white p-4 shadow">
      <AddTodo />
      <div className="my-4 grid gap-4 md:grid-cols-2">
        <FilterTodos setOptions={setOptions} />
        <SortTodos setOptions={setOptions} />
      </div>
      <TodoList options={options} />
    </div>
  );
};

export default TodoBox;
