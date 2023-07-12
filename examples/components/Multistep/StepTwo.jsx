import { Button } from '@components';
import { Age, Country, DateOfBirth, UsState } from '../Formik';

const StepTwo = ({ previous }) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Country />
        <UsState />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <DateOfBirth />
        <Age />
      </div>
      <Button className="mr-4" onClick={previous}>
        Back to previous step
      </Button>
      <div>
        <Button type="submit" className="button full primary">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
