import { Select } from '@components/Fields';
import { Field } from '@components/HookForm';
import { states } from '@data';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const UsState = () => {
  // NOTE: Any form field with complex logic should have it's own component

  const [disabled, setDisabled] = useState(true);

  const { watch, setValue } = useFormContext();
  const country = watch('country');

  // Disable the field when the country is not USA
  useEffect(() => {
    const isUsa = country === 'USA';
    setDisabled(!isUsa);
    if (!isUsa) {
      setValue('state', '');
    }
  }, [country, setValue]);

  return (
    <Field
      as={Select}
      disabled={disabled}
      help="Active only when you choose USA"
      label="US State"
      name="state"
      placeholder="Select your state"
    >
      {states.map((state) => (
        <option key={state} value={state}>
          {state}
        </option>
      ))}
    </Field>
  );
};

export default UsState;
