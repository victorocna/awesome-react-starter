import { Combobox, Fieldset } from '@components/Formik';
import { Field } from 'formik';

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
        <option value="43">Bucuresti Sector 3</option>
        <option value="44">Bucuresti Sector 4</option>
        <option value="45">Bucuresti Sector 5</option>
        <option value="46">Bucuresti Sector 6</option>
      </Field>
    </Fieldset>
  );
};

export default County;
