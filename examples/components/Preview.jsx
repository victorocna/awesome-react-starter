import { classnames } from '@lib';

const Preview = ({ children, title, type }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <h3 className="text-base font-semibold">{title}</h3>
        <div className="rounded bg-gray-200 px-2 py-1">
          <p className="font-medium">Preview</p>
        </div>
      </div>
      <div
        className={classnames(
          'overflow-hidden rounded-lg border border-gray-300',
          type === 'card' && 'bg-gray-200 p-8'
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Preview;
