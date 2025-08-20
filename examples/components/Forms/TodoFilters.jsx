import { Dropdown, Search } from '@components/Fields';
import { AutoSubmitFilterForm, Field } from '@components/HookForm';
import { initialValues, validationSchema } from '@examples/models/todo-filters';

const TodoFilters = ({ setOptions }) => {
  return (
    <AutoSubmitFilterForm
      className="flex flex-col gap-4 sm:flex-row"
      initialValues={initialValues}
      onSubmit={setOptions}
      validationSchema={validationSchema}
    >
      <Field
        as={Search}
        help="At least 3 characters are required for a search"
        label="Search your todos"
        name="search"
        placeholder="Search by name or #tag"
      />
      <Field
        as={Dropdown}
        help="Select an item from the dropdown"
        label="Search by todo status"
        name="only"
        placeholder="Search by status"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="pending">Pending</option>
      </Field>
    </AutoSubmitFilterForm>
  );
};

export default TodoFilters;
