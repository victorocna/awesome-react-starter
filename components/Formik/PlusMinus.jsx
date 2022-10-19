import { useFormikContext } from 'formik';
import { PlusMinus as PlusMinusField } from '../Fields';

const PlusMinus = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (e) => {
    setFieldValue(name, e.target.value);
  };

  return <PlusMinusField {...props} handleChange={handleChange} />;
};

export default PlusMinus;
