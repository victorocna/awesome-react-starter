import { Button } from '@components';
import { useFormikContext } from 'formik';
import { omitBy, size } from 'lodash';
import { useMemo } from 'react';
import { Modal } from 'react-bootstrap';

const FilterModalFooter = ({ initialValues = {}, onReset = () => {} }) => {
  const calculateActiveFilters = (values, initialValues) => {
    return size(omitBy(values, (v, k) => v === initialValues[k]));
  };

  const { resetForm, values } = useFormikContext();
  const activeFiltersCount = useMemo(
    () => calculateActiveFilters(values, initialValues),
    [values, initialValues, calculateActiveFilters]
  );

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

export default FilterModalFooter;
