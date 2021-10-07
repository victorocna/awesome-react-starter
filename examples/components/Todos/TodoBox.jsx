import { useState } from 'react';
import { AddTodo, FilterTodos, SortTodos, TodoList } from '.';

const TodoBox = () => {
  const [options, setOptions] = useState({});

  return (
    <div className="p-4 bg-white rounded shadow flex flex-col gap-4">
      <AddTodo />
      <div className="my-4 grid md:grid-cols-2 gap-4">
        <FilterTodos setOptions={setOptions} />
        <SortTodos setOptions={setOptions} />
      </div>
      <TodoList options={options} />
    </div>
  );
};

export default TodoBox;
