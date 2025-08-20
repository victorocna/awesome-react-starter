import { Logo, Pages } from '@components';
import { useSwipeable } from '@hooks';

const Menu = () => {
  const { inputRef, navRef, onTouchStart, onTouchMove, onTouchEnd } = useSwipeable();

  return (
    <>
      <input type="checkbox" id="menu" className="hidden" ref={inputRef} />
      <label
        htmlFor="menu"
        className="backdrop fixed inset-0 h-screen w-screen bg-gray-300 lg:hidden"
      />
      <nav
        className="nav-menu border-r border-gray-200 bg-white"
        ref={navRef}
        onTouchStart={(e) => onTouchStart(e.touches[0].clientX)}
        onTouchMove={(e) => onTouchMove(e.touches[0].clientX)}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex h-screen flex-col overflow-y-auto py-8 lg:sticky lg:top-0">
          <div className="px-8">
            <Logo />
          </div>
          <Pages />
        </div>
      </nav>
    </>
  );
};

export default Menu;
