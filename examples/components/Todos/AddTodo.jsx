import { AddTodoForm } from '../Forms';

const AddTodo = () => {
  return (
    <div className="grid gap-2">
      <h4 className="font-semibold">Add another item in your todo list</h4>
      <AddTodoForm />
    </div>
  );
};

export default AddTodo;
