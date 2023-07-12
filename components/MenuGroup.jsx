import { useCollapsible } from '@hooks';
import { classnames } from '@lib';

const MenuGroup = ({ name, label, children, level = 1 }) => {
  const { isOpen, toggle } = useCollapsible(`menu.${name}`);

  return (
    <>
      <div
        className={classnames(
          'flex cursor-pointer items-center py-2 text-gray-900 hover:bg-gray-100',
          level === 1 ? 'pl-8' : 'pl-12'
        )}
        onClick={toggle}
      >
        <span>{label}</span>
        <span className="pl-1 text-gray-600">
          <i className={classnames(isOpen ? 'fas fa-angle-down' : 'fas fa-angle-up')} />
        </span>
      </div>
      <div className={classnames('flex flex-col py-2', !isOpen && 'hidden')}>{children}</div>
    </>
  );
};

export default MenuGroup;
