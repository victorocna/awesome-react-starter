import { cn } from '@lib/utils';

const HeaderStep = ({ isActive, children }) => {
  return (
    <div className="flex flex-col justify-between">
      <h4 className={cn('mb-2 text-sm', isActive ? 'text-green-500' : 'text-gray-500')}>
        {children}
      </h4>
      <div
        className={cn(
          'text-default h-2 w-full rounded-full',
          isActive ? 'bg-green-500' : 'bg-gray-400'
        )}
      ></div>
    </div>
  );
};

export default HeaderStep;
