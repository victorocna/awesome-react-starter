import { useFormikContext } from 'formik';
import { PlusMinus as PlusMinusField } from '../Fields';

const PlusMinus = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    setFieldValue(name, value);
  };

  return <PlusMinusField {...props} handleChange={handleChange} />;
};

export default PlusMinus;
