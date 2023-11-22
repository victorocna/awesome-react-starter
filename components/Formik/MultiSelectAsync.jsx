import { MultiSelectAsync as MultiSelectAsyncField } from '@components/Fields';
import { useFormikContext } from 'formik';
import { get } from 'lodash';

const MultiSelectAsync = ({ api, field, getOptionToValue, getValueToOption, searchKey }) => {
  const { setFieldValue, values } = useFormikContext();

  const handleChange = (options) => {
    setFieldValue(field, options);
  };

  return (
    <MultiSelectAsyncField
      api={api}
      getOptionToValue={getOptionToValue}
      getValueToOption={getValueToOption}
      initialValues={get(values, field) || []}
      onChange={handleChange}
      searchKey={searchKey}
    />
  );
};

export default MultiSelectAsync;
