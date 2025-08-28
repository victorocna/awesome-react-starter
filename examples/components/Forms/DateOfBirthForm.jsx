import { DateOfBirth } from '@components/Fields';
import { Field, Form, HookForm } from '@components/HookForm';
import * as Yup from 'yup';

const DateOfBirthForm = () => {
  // Demo form props. In a real-world scenario, these would be imported from a file.
  const formProps = {
    initialValues: {
      dateOfBirth: '1989-06-10',
    },
    validationSchema: Yup.object().shape({
      dateOfBirth: Yup.string().required(),
    }),
  };

  return (
    <HookForm {...formProps}>
      <Form className="space-y-4" debug={true}>
        <div className="w-80">
          <span>Check-in date picker</span>
          <Field as={DateOfBirth} name="dateOfBirth" />
        </div>
      </Form>
    </HookForm>
  );
};

export default DateOfBirthForm;
