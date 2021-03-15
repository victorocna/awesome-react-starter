import { Select } from '../Forms';

const FilterTodos = ({ setOptions }) => {
  const handleChange = (event) => {
    setOptions((prev) => ({ ...prev, only: event.target.value }));
  };

  return (
    <Select onChange={handleChange}>
      <option value="" defaultChecked>
        View all
      </option>
      <option value="completed">Only completed</option>
      <option value="pending">Only pending</option>
    </Select>
  );
};

export default FilterTodos;
