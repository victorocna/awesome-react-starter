import CheckTodo from './CheckTodo';
import RemoveTodo from './RemoveTodo';
import TodoName from './TodoName';

const TodoListSuccess = ({ pages }) => {
  const showTodo = ({ _id: id, name, done }) => {
    return (
      <div key={id} className="todo flex items-center gap-2">
        <CheckTodo id={id} done={done} />
        <TodoName done={done} name={name} />
        <RemoveTodo id={id} />
      </div>
    );
  };

  return <div className="grid gap-2">{pages.map((page) => page.map(showTodo))}</div>;
};

export default TodoListSuccess;
