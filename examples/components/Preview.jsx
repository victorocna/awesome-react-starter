import { classnames } from '@lib';

const Preview = ({ children, title, type }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="bg-gray-200 rounded px-2 py-1">
          <p className="font-medium">Preview</p>
        </div>
      </div>
      <div
        className={classnames(
          'border border-gray-300 overflow-hidden rounded-lg',
          type === 'card' && 'p-8 bg-gray-200'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Preview;
