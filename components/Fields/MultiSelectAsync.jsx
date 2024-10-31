import { Button, NoSsr } from '@components';
import {
  getOptionToValue as defaultGetOptionToValue,
  getValueToOption as defaultGetValueToOption,
} from '@functions/format-multi-select';
import { useOnClickOutside, useQuery } from '@hooks';
import { debounce, has, isEqual, isFunction, sortBy } from 'lodash';
import { useEffect, useMemo, useRef, useState } from 'react';

const MultiSelectAsync = ({
  api = '',
  getOptionToValue = defaultGetOptionToValue,
  getValueToOption = defaultGetValueToOption,
  initialValues,
  onChange = () => {},
  searchKey = '',
}) => {
  // Initialize defaultSelected options based on initialValues
  const defaultSelected = useMemo(() => initialValues?.map(getValueToOption) || [], []);

  // Define state variables
  const [options, setOptions] = useState([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectAll, setSelectAll] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(defaultSelected);
  const [showMultiselect, setShowMultiselect] = useState(false);
  const ref = useRef();

  // Handle clicks outside the multiselect component
  useOnClickOutside(ref, () => {
    setSearchTerm('');
    setShowMultiselect(false);
  });

  // Handle checkbox state changes
  const handleCheckboxChange = (option) => {
    let newSelectedOptions = [];
    if (selectedOptions.some(({ value }) => value === option.value)) {
      // If the option is already selected, deselect it
      newSelectedOptions = selectedOptions.filter(({ value }) => value !== option.value);
    } else {
      // If the option is not selected, select it
      newSelectedOptions = [...selectedOptions, option];
    }
    setSelectedOptions(newSelectedOptions);
  };

  // Handle key-up events for search
  const handleKeyUp = (e) => {
    const { value } = e.target;
    if (value.length > 0 && value.length < 3 && !['Backspace', 'Delete'].includes(e.key)) {
      return;
    }
    setSearchTerm(value);
  };

  // Handle changes in the search input value
  const handleSearchInputChange = (e) => {
    setSearchInputValue(e.target.value);
  };

  // Handle clearing the search input
  const handleSearchInputClear = () => {
    setSearchInputValue('');
    setSearchTerm('');
  };

  // Handle selecting/deselecting all options
  const handleSelectAll = () => {
    setSelectedOptions((prev) => {
      if (selectAll) {
        // If all options are already selected, deselect all
        return prev.filter(({ value }) => !options.some((option) => option.value === value));
      } else {
        // If not all options are selected, select all
        return [
          ...prev,
          ...options.filter(({ value }) => !prev.some((option) => option.value === value)),
        ];
      }
    });
    setSelectAll((prev) => !prev);
  };

  // Toggle the visibility of the multiselect component
  const toggleMultiselect = () => {
    setSearchTerm('');
    setShowMultiselect((prev) => !prev);
  };

  // Debounce key-up event for smoother search
  const debouncedKeyUp = debounce(handleKeyUp, 500);

  // Calculate the input value based on selected options
  const inputValue = useMemo(() => {
    if (selectedOptions.length === 0) {
      return '';
    } else if (selectedOptions.length === 1) {
      return selectedOptions[0].label;
    } else {
      return `${selectedOptions.length} selected`;
    }
  }, [selectedOptions]);

  // Fetch data from the API based on the search term
  const { data, isLoading, status } = useQuery(api, { [searchKey]: searchTerm });

  // Update options when data is fetched successfully
  useEffect(() => {
    if (status === 'success') {
      const values = has(data, 'data') ? data.data : has(data, 'pages') ? data.pages : data;
      setOptions(values.map(getValueToOption) || []);
    }
  }, [searchTerm, status]);

  // Call onChange callback when selected options change
  useEffect(() => {
    if (isFunction(onChange)) {
      onChange(selectedOptions.map(getOptionToValue));
    }
  }, [selectedOptions]);

  // Update selectAll state based on selected options and available options
  useEffect(() => {
    // Calculate whether all options are selected or not
    setSelectAll(
      options.length > 0 &&
        selectedOptions.length > 0 &&
        ((options.length === selectedOptions.length &&
          // Check if options and selectedOptions have the same values (sorted)
          isEqual(sortBy(options, ['value']), sortBy(selectedOptions, ['value']))) ||
          (options.length < selectedOptions.length &&
            // Check if all options are selected
            options.every((option) => selectedOptions.some(({ value }) => value === option.value))))
    );
  }, [options, selectedOptions]);

  // Render the component
  return (
    <NoSsr>
      <>
        {/* Container for the multiselect component */}
        <div className="relative" ref={ref}>
          {/* Dropdown input */}
          <div className="dropdown cursor-pointer" onClick={toggleMultiselect}>
            <input
              className="-my-2 w-full cursor-pointer select-none bg-transparent outline-none"
              readOnly={true}
              value={inputValue}
            />
            <span role="button">
              <i className="fas fa-chevron-down" />
            </span>
          </div>
          {/* Multiselect dropdown */}
          {showMultiselect && (
            <div className="absolute z-50 mt-2 w-full rounded-lg border border-gray-300 bg-white p-2 shadow-xl">
              <div className="space-y-2">
                {/* Search input */}
                <div className="relative">
                  <input
                    className="w-full rounded border border-gray-300 px-2 py-1 pr-8 transition duration-200 ease-in-out focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleSearchInputChange}
                    onKeyUp={debouncedKeyUp}
                    placeholder="Search..."
                    type="text"
                    value={searchInputValue}
                  />
                  {/* Clear search input */}
                  <span className="absolute right-1 top-1/2 flex h-6 w-6 -translate-y-1/2 transform items-center justify-center transition duration-200 ease-in-out">
                    {isLoading ? (
                      <i className="fas fa-spinner fa-spin text-blue-500" />
                    ) : (
                      searchTerm.length > 0 && (
                        <i
                          className="fas fa-times cursor-pointer"
                          onClick={handleSearchInputClear}
                        />
                      )
                    )}
                  </span>
                </div>
                {/* List of options */}
                {options.length ? (
                  <div className="scrollbar-thin max-h-56 space-y-2 overflow-y-auto">
                    {/* Select/Deselect All button */}
                    <div className="flex items-center">
                      <Button
                        onClick={handleSelectAll}
                        className="my-1 rounded bg-primary px-2 py-1 text-white"
                      >
                        {selectAll ? 'Deselect All' : 'Select All'}
                      </Button>
                    </div>
                    {/* List of individual options */}
                    <div className="flex flex-col flex-wrap gap-2">
                      {options.map((option) => (
                        <label
                          className="flex cursor-pointer select-none items-center space-x-2 rounded px-2 py-1 hover:bg-gray-100"
                          key={option.value}
                        >
                          <input
                            checked={selectedOptions.some(({ value }) => value === option.value)}
                            className="checkbox h-5 w-5 text-blue-500"
                            onChange={() => handleCheckboxChange(option)}
                            type="checkbox"
                          />
                          <span>{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ) : (
                  // Displayed when no search results are found
                  <div className="text-center text-gray-500">No results found</div>
                )}
              </div>
            </div>
          )}
        </div>
      </>
    </NoSsr>
  );
};

export default MultiSelectAsync;
