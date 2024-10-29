import SearchField from '@components/Fields/Search';
import { Controller, useFormContext } from 'react-hook-form';

const Search = ({ name, ...props }) => {
  const { control, setValue } = useFormContext();

  const handleSearch = (value) => {
    return setValue(name, value);
  };

  // Render the component
  const render = ({ field }) => {
    return <SearchField setSearch={handleSearch} value={field.value} {...props} />;
  };

  return <Controller name={name} control={control} render={render} />;
};

export default Search;
