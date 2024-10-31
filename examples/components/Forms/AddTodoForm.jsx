import { Input } from '@components/Fields';
import { Field, Form, HookForm, Submit } from '@components/HookForm';
import { useMutation } from '@hooks';
import { createTodo } from '../../api/todo';
import { initialValues, validationSchema } from '../../models/todo';

const AddTodoForm = () => {
  const mutation = useMutation(createTodo, {
    invalidateQueries: 'admin/todos',
  });

  // Reset the form after a successful submission
  const handleSubmit = (data, form) => {
    mutation.mutate(data, {
      onSuccess: () => form.reset(),
    });
  };

  return (
    <HookForm
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form className="flex gap-4">
        <Field
          as={Input}
          name="name"
          placeholder="Write something here"
          autoComplete="off"
          autoFocus={true}
        />
        <Submit className="button full accent" isLoading={mutation.isLoading}>
          Add
        </Submit>
      </Form>
    </HookForm>
  );
};

export default AddTodoForm;
