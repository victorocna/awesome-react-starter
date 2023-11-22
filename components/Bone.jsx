import { classnames } from '@lib';

const Bone = ({ type, extraClass }) => {
  return (
    <dd
      className={classnames(
        'h-4 rounded-full',
        extraClass || 'w-12',
        type === 'loading' && 'animate-pulse bg-gray-300',
        type === 'error' && 'bg-red-300'
      )}
    ></dd>
  );
};

export default Bone;
