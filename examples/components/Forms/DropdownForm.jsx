import { Dropdown } from '@components/Fields';
import { Field, Fieldset, Form, HookForm } from '@components/HookForm';
import * as Yup from 'yup';

const DropdownForm = () => {
  // Demo form props. In a real-world scenario, these would be imported from a file.
  const formProps = {
    initialValues: {
      gender: 'M',
    },
    validationSchema: Yup.object().shape({
      gender: Yup.string().required(),
    }),
  };

  return (
    <HookForm {...formProps}>
      <Form className="space-y-4" debug={true}>
        <div className="w-80">
          <Fieldset name="gender" label="Pick your gender">
            <Field id="gender" name="gender" as={Dropdown}>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other</option>
            </Field>
          </Fieldset>
        </div>
      </Form>
    </HookForm>
  );
};

export default DropdownForm;
