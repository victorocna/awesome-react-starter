// These functions are used to switch between multiselect value structure and form value structure

interface FormValue {
  _id?: string;
  name?: string;
}

interface SelectOption {
  value?: string;
  label?: string;
}

/**
 * @param item the value inside the form
 * @returns the multiselect option
 */
export const getValueToOption = (item: FormValue): SelectOption => ({
  value: item?._id,
  label: item?.name,
});

/**
 * @param selectValue the multiselect options
 * @returns the value inside the form
 */
export const getOptionToValue = (selectValue: SelectOption): FormValue => ({
  _id: selectValue?.value,
  name: selectValue?.label,
});
