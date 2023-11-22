import { Menu } from '.';

const Header = () => (
  <div className="flex flex-col bg-green-700 text-white">
    <div className="mx-auto flex w-full max-w-screen-lg items-center p-4">
      <h1 className="flex-1">Header | Your awesome website</h1>
      <Menu />
    </div>
  </div>
);

export default Header;
