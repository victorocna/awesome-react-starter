import { Menu } from '.';

const Header = () => (
  <div className="bg-green-700 text-white flex flex-col">
    <div className="max-w-screen-lg w-full mx-auto p-4 flex items-center">
      <h1 className="flex-1">Header | Your awesome website</h1>
      <Menu />
    </div>
  </div>
);

export default Header;
