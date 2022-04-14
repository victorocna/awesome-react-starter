import { classnames } from '../../lib';

const DropdownList = ({ children, isOpen, getMenuProps, highlightedIndex, getItemProps }) => {
  const showItems = ({ props: { value, children } }, index) => {
    const isHover = highlightedIndex === index;

    return (
      <li
        key={`${value}${index}`}
        className={classnames('py-1 px-3', isHover && 'bg-gray-400')}
        {...getItemProps({ value, index })}
      >
        {children}
      </li>
    );
  };

  return (
    <ul
      className={classnames('outline-none my-0', isOpen && 'form-dropdown-list')}
      {...getMenuProps()}
    >
      {isOpen && children.map(showItems)}
    </ul>
  );
};

export default DropdownList;
