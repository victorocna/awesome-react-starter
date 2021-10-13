import { Field } from 'formik';
import { Dropdown } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';

const SomeFilter = () => {
  return (
    <Fieldset name="filter" label="Filter items">
      <Field id="filter" name="filter" as={Dropdown}>
        <option defaultSelected>View all</option>
        <option value="completed">Only completed</option>
        <option value="pending">Only pending</option>
      </Field>
    </Fieldset>
  );
};

export default SomeFilter;
