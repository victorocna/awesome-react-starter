import { Dropdown, Fieldset } from '@components/Formik';
import { Field } from 'formik';

const SomeFilter = () => {
  return (
    <Fieldset name="filter" label="Filter items">
      <Field id="filter" name="filter" as={Dropdown}>
        <option value="all">View all</option>
        <option value="completed">Only completed</option>
        <option value="pending">Only pending</option>
      </Field>
    </Fieldset>
  );
};

export default SomeFilter;
