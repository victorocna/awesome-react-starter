import { Field } from 'formik';
import { Fieldset, Select } from '.';

const Country = () => (
  <Fieldset
      name="country"
      label={<div className="text-gray-800 font-semibold mb-1">Country</div>}
      help={<p className="text-gray-600">Required info</p>}
    >
      <Field name="country">
        {(props) => (
          <Select {...props}>
            <option value="one">Option 1</option>
            <option value="two">Option 2</option>
          </Select>
        )}
      </Field>
    </Fieldset>
)

export default Country
