import { Dropdown } from '@components/Fields';

const FilterTodos = ({ setOptions }) => {
  const handleChange = (value) => {
    setOptions((prev) => ({ ...prev, only: value }));
  };

  return (
    <Dropdown value="all" onChange={handleChange}>
      <option value="all">View all</option>
      <option value="completed">Only completed</option>
      <option value="pending">Only pending</option>
    </Dropdown>
  );
};

export default FilterTodos;
