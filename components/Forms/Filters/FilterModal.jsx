import { Button } from '@components';
import { useEffect } from 'react';
import { Dialog } from 'radix-ui';
import { FormProvider, useForm } from 'react-hook-form';

/**
 * Footer component for the Filter Modal.
 *
 * @param {Object} props
 * @param {function} props.calculateActiveFilters Helper function to get count of active filters
 * @param {Object} props.initialValues Default/reset values for the filter form
 * @param {function} props.onReset Callback triggered on reset click
 * @param {function} props.resetForm Form resetting helper function
 * @param {Object} props.values Current form values
 */
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
    <footer className="grid grid-cols-2 gap-8 border-t border-gray-300 bg-white px-4 py-3">
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
    </footer>
  );
};

/**
 * Filter modal wrapper displaying filter controls inside a Radix UI dialog.
 *
 * @param {Object} props
 * @param {function} props.applyFilterLogic Callback when filter submission occurs
 * @param {function} props.calculateActiveFilters Helper to count active filters
 * @param {React.ReactNode|function} props.children Form fields / inner content (can be a function receiving form methods)
 * @param {function} props.hide Callback to close the modal
 * @param {Object} props.initialValues Default values for fields
 * @param {boolean} props.isOpen Control open state of the dialog
 * @param {string} props.title Title of the modal dialog
 * @param {Object} props.values Active values to populate form
 */
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
    <Dialog.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          hide();
        }
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
        <Dialog.Content className="fixed bottom-0 left-0 right-0 z-50 w-full bg-white outline-none data-open:animate-in data-open:fade-in-0 data-open:slide-in-from-bottom-5 data-closed:animate-out data-closed:fade-out-0 data-closed:slide-out-to-bottom-5">
          <Dialog.Title className="sr-only">{title}</Dialog.Title>
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="flex h-[100dvh] flex-col">
              <header className="flex justify-between border-b border-gray-300 bg-white px-4 py-3 shadow-sm">
                <p className="text-xl font-semibold">{title}</p>
                <Button
                  className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 p-2 text-center font-semibold"
                  onClick={hide}
                  type="button"
                >
                  <i className="fa-solid fa-xmark text-lg"></i>
                </Button>
              </header>
              <div className="h-full overflow-y-auto bg-gray-100 p-0">
                {renderedChildren}
              </div>
              <FilterModalFooter
                calculateActiveFilters={calculateActiveFilters}
                initialValues={initialValues}
                onReset={handleReset}
                resetForm={() => reset(initialValues)}
                values={watch()}
              />
            </form>
          </FormProvider>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default FilterModal;

