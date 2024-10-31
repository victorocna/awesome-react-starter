import { Button } from '@components';
import { DateOfBirth } from '@components/Fields';
import { Field, Form } from '@components/HookForm';
import { Age, Country, UsState } from '../HookForm';

const StepTwoForm = ({ goBack }) => {
  return (
    <Form className="grid gap-4" debug={true}>
      <div className="grid gap-4 md:grid-cols-2">
        <Country />
        <UsState />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Field as={DateOfBirth} name="dateOfBirth" label="Date of birth" help="Optional info" />
        <Age />
      </div>

      <div className="flex flex-wrap gap-4">
        <Button type="submit" className="button full primary">
          Continue
        </Button>
        <Button className="button mini secondary" onClick={goBack}>
          Back to previous step
        </Button>
      </div>
    </Form>
  );
};

export default StepTwoForm;
