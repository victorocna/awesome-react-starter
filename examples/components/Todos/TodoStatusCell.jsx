import { Badge } from 'react-bootstrap';

const TodoStatusCell = (info) => {
  const value = info.getValue();

  return (
    <div className="h-8 py-1">
      {value ? <Badge bg="success">Completed</Badge> : <Badge bg="danger">Pending</Badge>}
    </div>
  );
};

export default TodoStatusCell;
