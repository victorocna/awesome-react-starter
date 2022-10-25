import { classnames } from '../lib';

const Bone = ({ type, extraClass }) => {
  return (
    <dd
      className={classnames(
        'h-4 rounded-full',
        extraClass || 'w-12',
        type === 'loading' && 'bg-gray-300 animate-pulse',
        type === 'error' && 'bg-red-300'
      )}
    ></dd>
  );
};

export default Bone;
