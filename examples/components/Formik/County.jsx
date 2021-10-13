import { Field } from 'formik';
import { Combobox } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';

const County = () => {
  return (
    <Fieldset name="county" label="Choose a county">
      <Field id="county" name="county" as={Combobox}>
        <option value="01">Alba</option>
        <option value="02">Arad</option>
        <option value="03">Arges</option>
        <option value="04">Bacau</option>
        <option value="40">Bucuresti</option>
        <option value="41">Bucuresti Sector 1</option>
        <option value="42">Bucuresti Sector 2</option>
      </Field>
    </Fieldset>
  );
};

export default County;
