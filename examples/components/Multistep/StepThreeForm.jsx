import { Button } from '@components';
import { Textarea } from '@components/Fields';
import { Field, Form } from '@components/HookForm';

const StepThreeForm = ({ goBack }) => {
  return (
    <Form className="grid gap-4" debug={true}>
      <div className="grid gap-4 md:grid-cols-2">
        <Field as={Textarea} name="bio" label="Bio" help="Optional information about you" />
      </div>
      <div className="flex flex-wrap gap-4">
        <Button type="submit" className="button full primary">
          Finish
        </Button>
        <Button className="button mini secondary" onClick={goBack}>
          Back to previous step
        </Button>
      </div>
    </Form>
  );
};

export default StepThreeForm;
