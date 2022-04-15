import { classnames } from '../../lib';
import Option from './Option';

const OptionList = ({ children, isOpen, getMenuProps, highlightedIndex, getItemProps }) => {
  const showItems = (item, index) => {
    const props = getItemProps({ item, index });
    const isHover = highlightedIndex === index;

    return (
      <Option key={item.value} isHover={isHover} {...props}>
        {item.label}
      </Option>
    );
  };

  return (
    <ul
      className={classnames(
        'outline-none my-0 overflow-y-auto',
        isOpen && children.length && 'form-dropdown-list'
      )}
      {...getMenuProps()}
    >
      {isOpen && children.map(showItems)}
    </ul>
  );
};

export default OptionList;
