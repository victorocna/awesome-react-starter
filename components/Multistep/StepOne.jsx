import { Combobox, Dropdown } from '../Fields';
import { Email, Fullname, Terms } from '../Formik';
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
            <option value="01">Alba</option>
            <option value="02">Arad</option>
            <option value="03">Arges</option>
            <option value="04">Bacau</option>
            <option value="40">Bucuresti</option>
            <option value="41">Bucuresti Sector 1</option>
            <option value="42">Bucuresti Sector 2</option>
          </Combobox>
        </div>
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
