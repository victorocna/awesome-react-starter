import { DatePicker } from '@components/Fields';
import { Field, Form, HookForm } from '@components/HookForm';
import * as Yup from 'yup';

const DatePickerForm = () => {
  // Demo form props. In a real-world scenario, these would be imported from a file.
  const formProps = {
    initialValues: {
      checkInDate: '',
    },
    validationSchema: Yup.object().shape({
      checkInDate: Yup.string().required(),
    }),
  };

  return (
    <HookForm {...formProps}>
      <Form className="space-y-4" debug>
        <div className="w-80">
          <Field as={DatePicker} label="Check-in date picker" name="checkInDate" />
        </div>
      </Form>
    </HookForm>
  );
};

export default DatePickerForm;
