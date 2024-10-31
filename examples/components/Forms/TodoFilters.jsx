import { Dropdown, Search } from '@components/Fields';
import { Field, Form, HookForm } from '@components/HookForm';
import { initialValues } from '@examples/models/todo-filters';

const TodoFilters = ({ setOptions }) => {
  return (
    <HookForm initialValues={initialValues} onSubmit={setOptions}>
      <Form autoSubmit={true} className="flex gap-4 sm:flex-row flex-col">
        <Field
          as={Search}
          name="search"
          placeholder="Search by name or #tag"
          label="Search your todos"
          help="At least 3 characters are required for a search"
        />
        <Field
          as={Dropdown}
          name="only"
          placeholder="Search by status"
          label="Search by todo status"
          help="Select an item from the dropdown"
        >
          <option value="">All</option>
          <option value="completed">Completed</option>
          <option value="pending">Pending</option>
        </Field>
      </Form>
    </HookForm>
  );
};

export default TodoFilters;
