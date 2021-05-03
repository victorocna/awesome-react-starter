import { Combobox, Dropdown, Email, Fullname, Terms } from '../Forms';
import { Button } from '..';

const StepOne = () => {
  return (
    <div className="space-y-4">
      <Fullname />
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-gray-800 font-semibold mb-0">Filter items</label>
          <Dropdown>
            <option defaultSelected>View all</option>
            <option value="completed">Only completed</option>
            <option value="pending">Only pending</option>
          </Dropdown>
        </div>
        <div>
          <label className="text-gray-800 font-semibold mb-0">Choose a county</label>
          <Combobox>
            <option value="Alba">Alba</option>
            <option value="Arges">Arges</option>
            <option value="Bacau">Bacau</option>
          </Combobox>
        </div>
      </div>
      <Email />
      <Terms />
      <Button className="form-button" type="submit">
        Continue
      </Button>
    </div>
  );
};

export default StepOne;
