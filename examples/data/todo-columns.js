import { Time } from '@components';
import TodoStatusCell from '@examples/components/Todos/TodoStatusCell';

const todoColumns = [
  {
    Header: '#',
    accessor: 'no',
    extraClass: 'w-10',
  },
  {
    Header: 'My To Do',
    accessor: 'name',
  },
  {
    Header: 'Status',
    accessor: 'done',
    Cell: TodoStatusCell,
  },
  {
    Header: 'Created At',
    accessor: 'createdAt',
    Cell: Time,
  },
  {
    Header: 'Author',
    accessor: 'identity.name',
  },
];

export default todoColumns;
