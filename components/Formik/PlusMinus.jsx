import PlusMinusField from '@components/Fields/PlusMinus';
import { useFormikContext } from 'formik';

const PlusMinus = ({ name }) => {
  const { setFieldValue } = useFormikContext();

  const handleChange = (value) => {
    setFieldValue(name, value);
  };

  return <PlusMinusField handleChange={handleChange} />;
};

export default PlusMinus;
