import { Logo, MenuItem } from '.';
import { pages } from '../data';

const Menu = () => {
  const showPages = ({ name, href, icon }) => {
    return (
      <MenuItem key={`${href}-${icon}`} icon={icon} href={href}>
        {name}
      </MenuItem>
    );
  };

  return (
    <>
      <input type="checkbox" id="menu" className="hidden" aria-label="Menu open/close" />
      <label
        htmlFor="menu"
        aria-label="Menu open/close"
        className="backdrop bg-gray-300 fixed lg:hidden h-screen w-screen inset-0"
      />
      <nav className="nav-menu lg:w-72 lg:min-w-52 overflow-visible bg-white px-4 lg:px-8 border-r border-gray-200">
        <div className="py-8 lg:sticky lg:top-0">
          <Logo />
          <ul className="space-y-6 text-gray-300">{pages.map(showPages)}</ul>
        </div>
      </nav>
    </>
  );
};

export default Menu;
