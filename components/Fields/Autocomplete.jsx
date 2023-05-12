import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useQuery } from '../../hooks';
import AsyncCombobox from './AsyncCombobox';

const Autocomplete = ({ url, limit, optionValue, optionLabel, searchKey }) => {
  // Set search value with debounce
  const [value, setValue] = useState('');
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const debouncedChange = debounce(handleChange, 500);

  // Fetch data from API
  const { data, status } = useQuery(url, { limit, [searchKey]: value });

  // Format items for the combobox
  const formatItems = (item) => ({
    value: item[optionValue],
    label: item[optionLabel],
  });

  // Set items every time the search value changes
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (status === 'success') {
      setItems(data?.data?.map(formatItems) || []);
    }
  }, [value]);

  return (
    <AsyncCombobox onKeyUp={debouncedChange} status={status}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </AsyncCombobox>
  );
};

export default Autocomplete;
