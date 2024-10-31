import { DatePicker } from '@components/Fields';
import { Field, Fieldset, Form, HookForm } from '@components/HookForm';
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
      <Form className="space-y-4" debug={true}>
        <div className="w-80">
          <Fieldset name="checkInDate" label="Check-in date picker">
            <Field id="checkInDate" name="checkInDate" as={DatePicker} />
          </Fieldset>
        </div>
      </Form>
    </HookForm>
  );
};

export default DatePickerForm;
