import { classnames } from '../../../lib';

const TodoName = ({ done, name }) => {
  return <span className={classnames('flex-1', done && 'line-through')}>{name}</span>;
};

export default TodoName;
