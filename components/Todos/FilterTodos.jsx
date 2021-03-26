import { DropdownSelect } from '../Forms';

const items = [
  { value: '', verbose: 'View all', defaultSelected: true },
  { value: 'completed', verbose: 'Only completed' },
  { value: 'pending', verbose: 'Only pending' },
];

const FilterTodos = ({ setOptions }) => {
  const handleChange = (value) => {
    setOptions((prev) => ({ ...prev, only: value }));
  };

  return <DropdownSelect items={items} placeholder="placeholder" onSelect={handleChange} />;
};

export default FilterTodos;
