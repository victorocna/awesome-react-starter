import { Select } from '@components/Fields';
import { Fieldset } from '@components/Formik';
import { Field, useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import { states } from '../../../data';

const UsState = () => {
  const showUsStates = (state) => (
    <option key={state} value={state}>
      {state}
    </option>
  );
  const UsStateSelect = (props) => <Select {...props}>{states.map(showUsStates)}</Select>;

  const [disabled, setDisabled] = useState(true);
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    const isUsa = values?.country === 'USA';
    setDisabled(!isUsa);
    if (!isUsa) {
      setFieldValue('state', '');
    }
  }, [values?.country]);

  return (
    <Fieldset name="state" label="US State" help="Active only when you choose USA">
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
