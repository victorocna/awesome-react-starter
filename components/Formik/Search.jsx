import { Search as SearchField } from '@components/Fields';
import { useField, useFormikContext } from 'formik';

const Search = ({ name, ...props }) => {
  const [field] = useField(name);
  const { setFieldValue } = useFormikContext();

  const handleSearch = (value) => setFieldValue(name, value);

  return <SearchField setSearch={handleSearch} value={field.value} {...props} />;
};

export default Search;
