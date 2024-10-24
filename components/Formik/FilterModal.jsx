import { Button } from '@components';
import { Form, Formik } from 'formik';
import { Modal } from 'react-bootstrap';
import FilterModalFooter from './FilterModalFooter';

const FilterModal = ({
  filterCallback = () => {},
  children,
  hide = () => {},
  initialValues = {},
  isOpen = false,
  title = '',
  values = {},
}) => {
  // Reset the form to its initial values
  const handleReset = () => {
    filterCallback(initialValues);
  };

  return (
    <Modal
      animation={false}
      dialogClassName="absolute bottom-0 m-0 w-full"
      onHide={hide}
      show={isOpen}
    >
      <Formik initialValues={values} onSubmit={filterCallback}>
        <Form className="flex flex-col h-[100dvh]">
          <Modal.Header className="flex justify-between border-b border-gray-300 bg-white px-4 py-3 shadow-sm">
            <p className="text-xl font-semibold">{title}</p>
            <Button
              className="flex h-8 w-8 items-center justify-center rounded-md bg-gray-100 p-2 text-center font-semibold"
              onClick={hide}
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </Button>
          </Modal.Header>
          <Modal.Body className="h-full overflow-y-auto bg-gray-100 p-0">{children}</Modal.Body>
          <FilterModalFooter initialValues={initialValues} onReset={handleReset} />
        </Form>
      </Formik>
    </Modal>
  );
};

export default FilterModal;
