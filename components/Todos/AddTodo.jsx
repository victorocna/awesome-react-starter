import { AddTodoForm } from '../Formik';

const AddTodo = () => {
  return (
    <div className="space-y-2">
      <h4 className="font-semibold">Add another item in your todo list</h4>
      <AddTodoForm />
    </div>
  );
};

export default AddTodo;
