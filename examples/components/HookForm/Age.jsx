import { Number } from '@components/Fields';
import { Field } from '@components/HookForm';
import { differenceInYears } from 'date-fns';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const Age = () => {
  // NOTE: Any form field with complex logic should have it's own component

  const { watch, setValue } = useFormContext();
  const dateOfBirth = watch('dateOfBirth');

  useEffect(() => {
    if (dateOfBirth) {
      let age = differenceInYears(Date.now(), new Date(dateOfBirth));
      if (age < 0) {
        age = 0;
      }
      setValue('age', age);
    }
  }, [dateOfBirth, setValue]);

  return (
    <Field
      as={Number}
      name="age"
      readOnly={true}
      label="Age"
      help="Computed from your date of birth"
    />
  );
};

export default Age;
