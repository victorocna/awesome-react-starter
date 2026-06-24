import { cn } from '@lib/utils';

const Pill = ({ children, className }) => {
  return (
    <div className="inline-block">
      <div
        className={cn(
          'rounded-full px-3 py-1 text-xs font-medium leading-tight',
          className || 'bg-gray-200'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Pill;
