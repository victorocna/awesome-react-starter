import { Logo, Pages } from '.';

const Menu = () => {
  return (
    <>
      <input type="checkbox" id="menu" className="hidden" aria-label="Menu open/close" />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="backdrop bg-gray-300 fixed lg:hidden h-screen w-screen inset-0"
      />
      <nav className="nav-menu overflow-y-auto bg-white border-r border-gray-200">
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
