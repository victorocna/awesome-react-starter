import { useMutation, useQueryClient } from 'react-query';
import { Formik, Form, Field } from 'formik';
import { Input, Submit } from '../Forms';
import { validationSchema, initialValues } from '../../models/todo';
import { createTodo } from '../../api/todo'
import { toaster } from '../../functions';

const AddTodoForm = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation(createTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
      toaster.success('Todo added successfully');
    },
    onError: () => {
      toaster.error('Error! Cannot add your todo');
    },
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
        <Field name="name" as={Input} autoFocus />
        <Submit className="square-button square-button-accent">Add</Submit>
      </Form>
    </Formik>
  );
};

export default AddTodoForm;
