import { useState } from 'react';
import { local } from 'store2';
import { MenuItem } from '.';
import { classnames } from '../functions';

const MenuGroup = ({ name, items, children, level }) => {
  let initialOpen = local.get(`menu.${name}`);
  if (initialOpen === null) {
    initialOpen = true;
  }
  const [open, setOpen] = useState(initialOpen);

  const toggleMenu = () => {
    setOpen((open) => {
      local.set(`menu.${name}`, !open);
      return !open;
    });
  };

  const showItems = ({ name, href, items }) => {
    return (
      <>
        {items ? (
          <MenuGroup key={name} name={name} items={items} level={level + 1}>
            {name}
          </MenuGroup>
        ) : (
          <MenuItem key={name} href={href} level={level + 1}>
            {name}
          </MenuItem>
        )}
      </>
    );
  };

  return (
    <>
      <div
        className={classnames(
          'flex items-center py-2 text-gray-900 hover:bg-gray-100 cursor-pointer',
          level === 1 ? 'pl-8' : 'pl-12'
        )}
        onClick={toggleMenu}
      >
        {children}
        <i
          className={classnames(
            'pl-1 text-gray-600',
            open ? 'fas fa-angle-down' : 'fas fa-angle-up'
          )}
        />
      </div>
      <div className={classnames('flex flex-col py-2', !open && 'hidden')}>
        {items.map(showItems)}
      </div>
    </>
  );
};

export default MenuGroup;
