import { Field } from 'formik';
import { Fieldset, Input } from '../Forms';
import { Button } from '..';

const StepTwo = ({ previous }) => (
  <div className="space-y-4">
    <Fieldset
      name="country"
      label={<div className="text-gray-800 font-semibold mb-1">Country</div>}
    >
      <Field name="country" type="text" as={Input} />
    </Fieldset>

    <Fieldset
      name="birthday"
      label={<div className="text-gray-800 font-semibold mb-1">Date of birth</div>}
    >
      <Field name="birthday" type="text" as={Input} />
    </Fieldset>

    <Button variant="outline" className="mr-4" onClick={previous}>
      Back to previous step
    </Button>
    <Button type="submit">Continue</Button>
  </div>
);

export default StepTwo;
