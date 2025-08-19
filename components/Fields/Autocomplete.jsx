import { useQuery } from '@hooks';
import { debounce, has } from 'lodash';
import { useEffect, useState } from 'react';
import AsyncCombobox from './AsyncCombobox';

const Autocomplete = ({ url, optionValue, optionLabel, searchKey, ...props }) => {
  // Set input value with debounce
  const [inputValue, setInputValue] = useState('');
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const debouncedChange = debounce(handleChange, 500);

  // Fetch data from API
  const { data, status } = useQuery(url, { [searchKey]: inputValue });

  // Set items every time the search value changes
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (status === 'success') {
      // dirty hack to handle both array and object responses
      if (has(data, 'data')) {
        setItems(
          data?.data?.map((item) => ({ value: item[optionValue], label: item[optionLabel] })) || []
        );
      } else {
        setItems(
          data?.map((item) => ({ value: item[optionValue], label: item[optionLabel] })) || []
        );
      }
    }
  }, [status, data, optionValue, optionLabel]);

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
