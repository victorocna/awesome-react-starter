import { Button } from '@components';
import { Bio } from '../Formik';

const StepThree = ({ previous }) => {
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <Bio />
      </div>
      <Button className="mr-4" onClick={previous}>
        Back to previous step
      </Button>
      <Button type="submit" className="button full primary">
        Finish
      </Button>
    </div>
  );
};

export default StepThree;
