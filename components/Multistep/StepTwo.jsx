import { Age, Country, DateOfBirth, UsState } from '../Forms';
import { Button } from '..';

const StepTwo = ({ previous }) => (
  <div className="space-y-4">
    <div className="grid md:grid-cols-2 gap-4">
      <Country />
      <UsState />
    </div>
    <div className="grid md:grid-cols-2 gap-4">
      <DateOfBirth />
      <Age />
    </div>
    <Button variant="outline" className="mr-4" onClick={previous}>
      Back to previous step
    </Button>
    <Button type="submit">Continue</Button>
  </div>
);

export default StepTwo;
