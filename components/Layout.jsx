import { ErrorBoundary, Menu, MenuButton, Profile } from '@components';

const Layout = ({ title, children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-body text-sm">
      <Menu />
      <main className="max w-full gap-4 p-4 lg:col-span-5 lg:p-8 xl:px-12">
        <div className="mb-12 flex items-center">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
          <Profile />
          <MenuButton />
        </div>
        <div className="grid gap-4">
          <ErrorBoundary>
            <div className="rounded border border-gray-300 bg-white p-4">{children}</div>
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
};

export default Layout;
