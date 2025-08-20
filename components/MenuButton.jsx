import React from 'react';

const MenuButton = () => {
  return (
    <div
      className="ml-2 inline-block rounded border bg-white px-2 py-1 text-primary xl:hidden"
      aria-label="Open menu"
    >
      <label htmlFor="menu" className="mb-0 flex cursor-pointer items-center text-primary">
        <i className="fas fa-bars w-6 text-lg"></i>
        <span className="text-sm">Menu</span>
      </label>
    </div>
  );
};

export default MenuButton;
