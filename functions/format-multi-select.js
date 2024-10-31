// These functions are used to switch between multiselect value structure and form value structure

/**
 * @param {Object} item the value inside the form
 * @returns the multiselect option
 */
export const getValueToOption = (item) => ({
  value: item?._id,
  label: item?.name,
});

/**
 * @param {Object} selectValue the multiselect options
 * @returns the value inside the form
 */
export const getOptionToValue = (selectValue) => ({
  _id: selectValue?.value,
  name: selectValue?.label,
});
