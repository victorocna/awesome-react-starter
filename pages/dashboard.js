import { Menu } from '../components';

const Page = () => (
  <div className="font-body text-sm min-h-screen bg-gray-100 flex">
    <Menu />
    <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12 space-y-4">
      <div className="flex items-center mb-12">
        <h3>Hello world</h3>
      </div>
    </main>
  </div>
);

export default Page;
