// These functions are used to switch between multiselect value structure and formik value structure

/**
 * @param {Object} formikValue the value inside the form
 * @returns the multiselect option
 */
export const getValueToOption = (formikValue) => ({
  value: formikValue?._id,
  label: formikValue?.name,
});

/**
 * @param {Object} selectValue the multiselect options
 * @returns the value inside the form
 */
export const getOptionToValue = (selectValue) => ({
  _id: selectValue?.value,
  name: selectValue?.label,
});
