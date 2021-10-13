import { useState, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import { Select } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';
import { states } from '../../../data';

const UsState = () => {
  const showUsStates = (state) => (
    <option key={state} value={state}>
      {state}
    </option>
  );
  const UsStateSelect = (props) => <Select {...props}>{states.map(showUsStates)}</Select>;

  const [disabled, setDisabled] = useState(true);
  const {
    values: { country },
  } = useFormikContext();

  useEffect(() => {
    setDisabled(country !== 'USA');
  }, [country]);

  return (
    <Fieldset name="state" label="US State" help="Uses default select tag">
      <Field
        id="state"
        name="state"
        disabled={disabled}
        placeholder="Select your state"
        as={UsStateSelect}
      />
    </Fieldset>
  );
};

export default UsState;
