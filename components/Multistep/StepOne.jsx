import { Email, Fullname, Terms } from '../Forms';
import { Button } from '..';

const StepOne = () => (
  <div className="space-y-4">
    <Fullname />
    <Email />
    <Terms />
    <Button type="submit">Continue</Button>
  </div>
);

export default StepOne;
