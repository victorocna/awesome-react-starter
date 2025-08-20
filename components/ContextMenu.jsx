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

  const showOptions = ({ label, onClick, href, renderCondition = true }, index) => {
    if (!renderCondition) {
      return null;
    }

    return (
      <li key={`context-menu-option-${index}`} className="hover:bg-gray-100">
        <Button href={href} onClick={onClick} className="flex items-center px-4 py-2 text-gray-600">
          {label}
        </Button>
      </li>
    );
  };

  return (
    <div className="relative -mr-4 flex items-center justify-center gap-4">
      <Button onClick={show} className="cursor-pointer items-center px-4 md:flex">
        {children}
      </Button>
      {isOpen && (
        <div className="absolute top-0 z-50 w-fit overflow-hidden border bg-white shadow-xl">
          <ul className="flex flex-col" ref={ref}>
            {options?.map(showOptions)}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContextMenu;
