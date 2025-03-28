import { TimePicker } from '@components/Fields';
import { Field, Fieldset, Form, HookForm } from '@components/HookForm';
import * as Yup from 'yup';

const TimePickerForm = () => {
  // Demo form props. In a real-world scenario, these would be imported from a file.
  const formProps = {
    initialValues: {
      checkInTime: '',
    },
    validationSchema: Yup.object().shape({
      checkInTime: Yup.string().required(),
    }),
  };

  return (
    <HookForm {...formProps}>
      <Form className="space-y-4" debug={true}>
        <div className="w-80">
          <Fieldset name="checkInTime" label="Check-in date picker">
            <Field id="checkInTime" name="checkInTime" as={TimePicker} />
          </Fieldset>
        </div>
      </Form>
    </HookForm>
  );
};

export default TimePickerForm;
