import { Formik, Form, Field } from 'formik';
import { Input } from '../Fields';
import { Submit } from '../Formik';
import { validationSchema, initialValues } from '../../examples/models/todo';
import { createTodo } from '../../examples/api/todo';
import { useMutation } from '../../hooks';

const AddTodoForm = () => {
  const mutation = useMutation('todos', createTodo, {
    success: 'Todo added successfully',
    error: 'Error! Cannot add your todo',
  });

  const handleSubmit = (data, formik) => {
    mutation.mutate(data);
    formik.resetForm();
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="flex gap-4">
        <Field name="name" as={Input} autoFocus autoComplete="off" />
        <Submit className="button full accent" isLoading={mutation.isLoading}>
          Add
        </Submit>
      </Form>
    </Formik>
  );
};

export default AddTodoForm;
