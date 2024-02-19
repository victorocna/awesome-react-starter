import { classnames } from '@lib';

const HeaderStep = ({ isActive, children }) => {
  return (
    <div className="flex flex-col justify-between">
      <h4 className={classnames('mb-2 text-sm', isActive ? 'text-green-500' : 'text-gray-500')}>
        {children}
      </h4>
      <div
        className={classnames(
          'h-2 w-full rounded-full text-default',
          isActive ? 'bg-green-500' : 'bg-gray-400'
        )}
      ></div>
    </div>
  );
};

export default HeaderStep;
