import { Dropdown, Fieldset, Form, Search } from '@components/Formik';
import { Field, Formik } from 'formik';

const TodoFilters = ({ setOptions }) => {
  const initialValues = {
    search: '',
    only: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={setOptions}>
      <Form autoSubmit={true} className="flex gap-4">
        <Fieldset
          label="Search your todos"
          name="search"
          help="At least 3 characters are required for a search"
        >
          <Field as={Search} id="search" name="search" placeholder="Search by name or #tag" />
        </Fieldset>
        <Fieldset label="Search by todo status" name="only" help="Select an item from the dropdown">
          <Field as={Dropdown} id="only" name="only" placeholder="Search by status">
            <option value="">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </Field>
        </Fieldset>
      </Form>
    </Formik>
  );
};

export default TodoFilters;
