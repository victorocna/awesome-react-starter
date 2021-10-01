import { MenuItem } from '.';
import { classnames } from '../lib';
import { useCollapsible } from '../hooks';

const MenuGroup = ({ name, items, children, level }) => {
  const { isOpen, toggle } = useCollapsible(`menu.${name}`);

  // only one level deep
  const showItems = ({ name, href }) => {
    return (
      <MenuItem key={name} href={href} level="2">
        {name}
      </MenuItem>
    );
  };

  return (
    <>
      <div
        className={classnames(
          'flex items-center py-2 text-gray-900 hover:bg-gray-100 cursor-pointer',
          level === 1 ? 'pl-8' : 'pl-12'
        )}
        onClick={toggle}
      >
        {children}
        <i
          className={classnames(
            'pl-1 text-gray-600',
            isOpen ? 'fas fa-angle-down' : 'fas fa-angle-up'
          )}
        />
      </div>
      <div className={classnames('flex flex-col py-2', !isOpen && 'hidden')}>
        {items.map(showItems)}
      </div>
    </>
  );
};

export default MenuGroup;
