import { Time } from '@components';
import TodoStatusCell from '@examples/components/Todos/TodoStatusCell';

const todoColumns = [
  {
    id: 'no',
    header: '#',
    accessorKey: 'no',
    extraClass: 'w-10',
  },
  {
    id: 'name',
    header: 'My To Do',
    accessorKey: 'name',
  },
  {
    id: 'done',
    header: 'Status',
    accessorKey: 'done',
    cell: TodoStatusCell,
  },
  {
    id: 'createdAt',
    header: 'Created At',
    accessorKey: 'createdAt',
    cell: Time,
  },
  {
    id: 'author',
    header: 'Author',
    accessorKey: 'identity.name',
  },
];

export default todoColumns;
