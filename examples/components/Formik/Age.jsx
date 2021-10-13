import { useEffect } from 'react';
import { differenceInYears } from 'date-fns';
import { Field, useFormikContext } from 'formik';
import { Number } from '../../../components/Fields';
import { Fieldset } from '../../../components/Formik';

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
    <Fieldset name="age" label="Age" help="Computed from your date of birth">
      <Field id="age" name="age" as={Number} readOnly />
    </Fieldset>
  );
};

export default Age;
