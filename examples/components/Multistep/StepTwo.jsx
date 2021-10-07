import { Age, Country, DateOfBirth, UsState } from '../Formik';
import { Button } from '../../../components';

const StepTwo = ({ previous }) => {
  return (
    <div className="grid gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <Country />
        <UsState />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
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
