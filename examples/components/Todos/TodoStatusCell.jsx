import { Badge } from 'react-bootstrap';

const TodoStatusCell = ({ value }) => {
  return (
    <div className="h-8 py-1">
      {value ? <Badge bg="success">Completed</Badge> : <Badge bg="danger">Pending</Badge>}
    </div>
  );
};

export default TodoStatusCell;
