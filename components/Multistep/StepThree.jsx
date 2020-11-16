import { Bio } from '../Forms';
import { Button } from '..';

const StepThree = ({ previous }) => (
  <div className="space-y-4">
    <div className="grid md:grid-cols-2 gap-4">
      <Bio />
    </div>
    <Button variant="outline" className="mr-4" onClick={previous}>
      Back to previous step
    </Button>
    <Button type="submit">Finish</Button>
  </div>
);

export default StepThree;
