import { County, Email, Fullname, SomeFilter, Terms } from '../Formik';
import { Button } from '../../../components';

const StepOne = () => {
  return (
    <div className="space-y-4">
      <Fullname />
      <div className="grid gap-4 md:grid-cols-2">
        <SomeFilter />
        <County />
      </div>
      <Email />
      <Terms />
      <Button className="button full primary" type="submit">
        Continue
      </Button>
    </div>
  );
};

export default StepOne;
