import { Formik, Form, Field } from 'formik';
import { Input, Submit } from '../Forms';
import { validationSchema, initialValues } from '../../models/todo';
import { createTodo } from '../../api/todo';
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
      <Form className="flex space-x-4">
        <Field name="name" as={Input} autoFocus autoComplete="off" />
        <Submit className="square-button square-button-accent" isLoading={mutation.isLoading}>
          Add
        </Submit>
      </Form>
    </Formik>
  );
};

export default AddTodoForm;
