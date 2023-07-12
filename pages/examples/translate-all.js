import { Menu, MenuButton, NoSsr, TranslateAll } from '@components';
import { DropdownLanguage } from '@components/Fields';

const Page = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 font-body text-sm">
      <Menu />
      <main className="max w-full p-4 lg:col-span-5 lg:p-8 xl:px-12">
        <div className="mb-12 flex items-center">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Translate all</h3>
          </div>
          <MenuButton />
        </div>
        <div className="grid gap-4 rounded bg-white p-4 shadow">
          <div className="flex flex-col">
            <h4 className="mb-2 text-lg">Translate all text in the page</h4>
            <p className="mb-2">Hello world</p>
          </div>
          <div className="flex flex-col">
            <h4 className="mb-2 text-lg">How to use</h4>
            <p className="mb-2">
              Go to the pages folder and open <code>_app.js</code> file.
            </p>
            <p className="mb-2">
              Import the <code>TranslateAll</code> component from the components folder.
            </p>
            <p className="mb-2">
              Add the <code>TranslateAll</code> component to the page.
            </p>
            <p className="mb-2">
              Wrap the <code>TranslateAll</code> component with the <code>NoSsr</code> component to
              prevent the component from rendering on the server.
            </p>
          </div>
          <div className="mt-2 flex flex-col gap-4 text-primary">
            <p className="font-medium">Select a language:</p>
            <DropdownLanguage />
          </div>
        </div>
      </main>
      <NoSsr>
        <TranslateAll />
      </NoSsr>
    </div>
  );
};

export default Page;
