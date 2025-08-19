import { Button } from '@components';
import { useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { FormProvider, useForm } from 'react-hook-form';

const FilterModalFooter = ({
  calculateActiveFilters = () => {},
  initialValues = {},
  onReset = () => {},
  resetForm = () => {},
  values = {},
}) => {
  const activeFiltersCount = calculateActiveFilters(values, initialValues);

  const handleReset = () => {
    resetForm();
    onReset();
  };

  return (
    <Modal.Footer className="grid grid-cols-2 gap-8 border-t border-gray-300 bg-white px-4 py-3">
      <Button
        className="m-0 rounded-md bg-gray-200 px-4 py-2 text-center text-base font-semibold"
        disabled={activeFiltersCount === 0}
        onClick={handleReset}
        type="button"
      >
        Resetează {activeFiltersCount > 0 && `(${activeFiltersCount})`}
      </Button>
      <Button
        className="m-0 rounded-md bg-primary px-4 py-2 text-center text-base font-semibold text-white"
        type="submit"
      >
        Aplică
      </Button>
    </Modal.Footer>
  );
};

const FilterModal = ({
  applyFilterLogic = () => {},
  calculateActiveFilters = () => {},
  children,
  hide = () => {},
  initialValues = {},
  isOpen = false,
  title = '',
  values = {},
}) => {
  const resolvedValues = { ...initialValues, ...(values || {}) };

  const methods = useForm({
    defaultValues: resolvedValues,
  });

  const { handleSubmit, reset, watch, getValues } = methods;

  const shallowEqual = (a = {}, b = {}) => {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (let i = 0; i < aKeys.length; i++) {
      const key = aKeys[i];
      if (a[key] !== b[key]) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    // Reset to the merged resolved values when they differ from current form values.
    const toReset = { ...initialValues, ...(values || {}) };
    const current = getValues();
    if (!shallowEqual(current, toReset)) {
      reset(toReset);
    }
  }, [values, initialValues, reset, getValues]);

  const handleReset = () => {
    applyFilterLogic(initialValues);
    hide();
  };

  const onSubmit = (formValues) => {
    applyFilterLogic(formValues);
    hide();
  };

  // If children is a render function, call it with form methods; otherwise render children as-is.
  const renderedChildren = typeof children === 'function' ? children(methods) : children;

  return (
    <Modal
      animation={false}
      dialogClassName="absolute bottom-0 m-0 w-full"
      onHide={hide}
      show={isOpen}
    >
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-[100dvh]">
          <Modal.Header className="flex justify-between border-b border-gray-300 bg-white px-4 py-3 shadow-sm">
            <p className="text-xl font-semibold">{title}</p>
            <Button
              className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 p-2 text-center font-semibold"
              onClick={hide}
              type="button"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </Button>
          </Modal.Header>
          <Modal.Body className="h-full overflow-y-auto bg-gray-100 p-0">
            {renderedChildren}
          </Modal.Body>
          <FilterModalFooter
            calculateActiveFilters={calculateActiveFilters}
            initialValues={initialValues}
            onReset={handleReset}
            resetForm={() => reset(initialValues)}
            values={watch()}
          />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default FilterModal;
