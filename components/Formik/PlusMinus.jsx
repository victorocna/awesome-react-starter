import { useFormikContext } from 'formik';
import { PlusMinus as PlusMinusField } from '../Fields';

const PlusMinus = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    setFieldValue(name, value);
  };

  return <PlusMinusField handleChange={handleChange} />;
};

export default PlusMinus;
