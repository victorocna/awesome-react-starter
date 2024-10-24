import { Button } from '@components';
import { useDisclosure, useOnClickOutside } from '@hooks';
import { useRef } from 'react';

/**
 * Context menu component with customizable button and options list
 * @param options - Array of objects with label, onClick, href, and renderCondition properties
 * @param children - Button component
 */
const ContextMenu = ({ options, children }) => {
  const { isOpen, show, hide } = useDisclosure();

  // Close the context menu when clicking outside the menu
  const ref = useRef();
  useOnClickOutside(ref, hide);

  const showOptions = ({ label, onClick, href, renderCondition = true }) => {
    if (!renderCondition) {
      return null;
    }

    return (
      <li className="hover:bg-gray-100">
        <Button href={href} onClick={onClick} className="px-4 py-2 text-gray-600 flex items-center">
          {label}
        </Button>
      </li>
    );
  };

  return (
    <div className="flex items-center gap-4 relative justify-center -mr-4">
      <Button onClick={show} className="md:flex items-center cursor-pointer px-4">
        {children}
      </Button>
      {isOpen && (
        <div className="absolute top-0 bg-white shadow-xl z-50 border overflow-hidden w-fit">
          <ul className="flex flex-col" ref={ref}>
            {options?.map(showOptions)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
