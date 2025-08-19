import { Dropdown, Search } from '@components/Fields';
import { AutoSubmitFilterForm, Field } from '@components/HookForm';
import { initialValues, validationSchema } from '@examples/models/todo-filters';

const TodoFilters = ({ setOptions }) => {
  return (
    <AutoSubmitFilterForm
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={setOptions}
      className="flex flex-col gap-4 sm:flex-row"
    >
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
        id="todo-status-dropdown"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </Field>
    </AutoSubmitFilterForm>
  );
};

export default TodoFilters;
