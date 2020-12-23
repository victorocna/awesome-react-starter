import { Footer, HeaderAuth } from '.';

const LayoutAuth = ({ children }) => (
  <div className="flex flex-col h-screen">
    <HeaderAuth />
    <main className="bg-gray-100 flex flex-col flex-1">
      <div className="max-w-screen-lg w-full mx-auto p-4">{children}</div>
    </main>
    <Footer />
  </div>
);

export default LayoutAuth;
