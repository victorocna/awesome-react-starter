import { Field } from 'formik';
import { Fieldset, Input } from '../Forms';
import { Button } from '..';

const StepOne = () => (
  <div className="space-y-4">
    <Fieldset
      name="fullname"
      label={<div className="text-gray-800 font-semibold mb-1">Full name</div>}
    >
      <Field name="fullname" type="text" as={Input} />
    </Fieldset>

    <Fieldset
      name="email"
      label={<div className="text-gray-800 font-semibold mb-1">Email address</div>}
    >
      <Field name="email" type="email" as={Input} />
    </Fieldset>

    <Button type="submit">Continue</Button>
  </div>
);

export default StepOne;
