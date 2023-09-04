import { Fieldset, Form, Search } from '@components/Formik';
import { Field, Formik } from 'formik';

const TodoFilter = ({ setOptions }) => {
  const initialValues = {
    search: '',
  };

  return (
    <Formik initialValues={initialValues} onSubmit={setOptions}>
      <Form autoSubmit={true}>
        <Fieldset
          label="Search your todos"
          name="search"
          help="At least 3 characters are required for a search"
        >
          <Field as={Search} id="search" name="search" placeholder="Search by name or #tag" />
        </Fieldset>
      </Form>
    </Formik>
  );
};

export default TodoFilter;
