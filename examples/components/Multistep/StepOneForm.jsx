import { Button } from '@components';
import { Checkbox, Combobox, Dropdown, Email, Input } from '@components/Fields';
import { Field, Form } from '@components/HookForm';

const StepOneForm = () => {
  return (
    <Form className="grid gap-4" debug={true}>
      <Field as={Input} name="fullname" label="Full name" help="Required info" />
      <div className="grid gap-4 md:grid-cols-2">
        <Field as={Dropdown} name="filter" label="Filter items">
          <option value="all">View all</option>
          <option value="completed">Only completed</option>
          <option value="pending">Only pending</option>
        </Field>
        <Field as={Combobox} name="county" label="Choose a county">
          <option value="01">Alba</option>
          <option value="02">Arad</option>
          <option value="03">Arges</option>
          <option value="04">Bacau</option>
          <option value="40">Bucuresti</option>
          <option value="05">Brasov</option>
          <option value="06">Bihor</option>
          <option value="07">Bistrita-Nasaud</option>
          <option value="08">Botosani</option>
          <option value="09">Braila</option>
          <option value="10">Buzau</option>
        </Field>
      </div>
      <Field as={Email} name="email" label="Email address" help="Required info" />
      <Field as={Checkbox} name="terms" help="Help label">
        I accept the terms and conditions of this application
      </Field>
      <Button className="button full primary" type="submit">
        Continue
      </Button>
    </Form>
  );
};

export default StepOneForm;
