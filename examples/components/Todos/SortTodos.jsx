import { Select } from '../../../components/Fields';

const SortTodos = ({ setOptions }) => {
  const rearrange = (event) => {
    const sort = event.target.value.split(',')[0];
    const direction = event.target.value.split(',')[1];

    setOptions((prev) => ({ ...prev, sort, direction }));
  };

  return (
    <Select onChange={rearrange}>
      <option value="createdAt,desc" defaultChecked>
        Latest first
      </option>
      <option value="createdAt,asc">Oldest first</option>
    </Select>
  );
};

export default SortTodos;
