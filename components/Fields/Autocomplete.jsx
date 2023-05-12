import { debounce } from 'lodash';
import { useEffect, useState } from 'react';
import { useQuery } from '../../hooks';
import AsyncCombobox from './AsyncCombobox';

const Autocomplete = ({ url, limit, optionValue, optionLabel, searchKey, ...props }) => {
  // Set input value with debounce
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const debouncedChange = debounce(handleChange, 500);

  // Fetch data from API
  const { data, status } = useQuery(url, { limit, [searchKey]: inputValue });

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
  }, [inputValue, status]);

  return (
    <AsyncCombobox onKeyUp={debouncedChange} status={status} {...props}>
      {items.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </AsyncCombobox>
  );
};

export default Autocomplete;
