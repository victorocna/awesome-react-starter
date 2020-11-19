import { useState, useEffect } from 'react';
import { Field, useFormikContext } from 'formik';
import { Fieldset, Select } from '.';
import { states } from '../../data';

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
    <Fieldset
      name="state"
      label={<div className="text-gray-800 font-semibold mb-1">US State</div>}
      help={<p className="text-gray-600">Uses default select tag</p>}
    >
      <Field name="state" disabled={disabled} placeholder="Select your state" as={UsStateSelect} />
    </Fieldset>
  );
};

export default UsState;
