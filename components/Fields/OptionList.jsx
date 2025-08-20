import { classnames } from '@lib';
import Option from './Option';

const OptionList = ({ children, getItemProps, getMenuProps, highlightedIndex, isOpen }) => {
  const items = Array.isArray(children) ? children : [];

  const showItems = (item, index) => {
    const props = getItemProps({ item, index });
    const isHover = highlightedIndex === index;

    return (
      <Option key={String(item.value)} isHover={isHover} {...props}>
        {item.label}
      </Option>
    );
  };

  return (
    <ul
      className={classnames(
        'my-0 overflow-y-auto p-0 outline-none',
        isOpen && items.length > 0 && 'dropdown-list'
      )}
      {...getMenuProps()}
    >
      {isOpen && items.map(showItems)}
    </ul>
  );
};

export default OptionList;
