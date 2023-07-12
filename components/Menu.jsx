import { Logo, Pages } from '@components';

const Menu = () => {
  return (
    <>
      <input type="checkbox" id="menu" className="hidden" aria-label="Menu open/close" />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="backdrop fixed inset-0 h-screen w-screen bg-gray-300 lg:hidden"
      />
      <nav className="nav-menu overflow-y-auto border-r border-gray-200 bg-white">
        <div className="flex flex-col py-8 lg:sticky lg:top-0">
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
