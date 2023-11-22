import { Search as SearchField } from '@components/Fields';
import { useFormikContext } from 'formik';

const Search = ({ name, ...props }) => {
  const { setFieldValue } = useFormikContext();

  const handleSearch = (value) => setFieldValue(name, value);

  return <SearchField setSearch={handleSearch} {...props} />;
};

export default Search;
