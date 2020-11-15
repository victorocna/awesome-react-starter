import { useEffect } from 'react';
import { differenceInYears } from 'date-fns';
import { Field, useFormikContext } from 'formik';
import { Fieldset, Input } from '.';

const Age = () => {
  const { values, setFieldValue } = useFormikContext();
  useEffect(() => {
    if (values.dateOfBirth) {
      let age = differenceInYears(Date.now(), new Date(values.dateOfBirth));
      if (age * 1 < 0) {
        age = 0;
      }
      setFieldValue('age', age);
    }
  }, [values.dateOfBirth]);

  return (
    <Fieldset
      name="age"
      label={<div className="text-gray-800 font-semibold mb-1">Age</div>}
      help={<p className="text-gray-600">Computed from your date of birth</p>}
    >
      <Field name="age" type="number" readOnly as={Input} />
    </Fieldset>
  );
};

export default Age;
