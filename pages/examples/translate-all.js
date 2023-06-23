import { Menu, MenuButton, NoSsr, Tooltip, TranslateAll } from '../../components';
import { DropdownLanguage } from '../../components/Fields';

const Page = () => {
  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <Menu />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Translate all</h3>
            <Tooltip placement="bottom">Translate all text in the page</Tooltip>
          </div>
          <MenuButton />
        </div>
        <div className="bg-white rounded shadow p-4 grid gap-4">
          <div className="flex flex-col">
            <h4 className="mb-2 text-lg">Translate all text in the page</h4>
            <p className="mb-2">
              This is a simple example of how to translate all text in the page.
            </p>
          </div>
          <div className="flex flex-col">
            <h4 className="mb-2 text-lg">How to use</h4>
            <p className="mb-2">Import the TranslateAll component from the components folder.</p>
            <p className="mb-2">Add the TranslateAll component to the page.</p>
          </div>
          <div className="flex flex-col">
            <h4 className="mb-2 text-lg">Code</h4>
            <pre className="bg-gray-100 rounded p-4">
              <code>
                {`import { NoSsr, TranslateAll } from '../components';

const Page = () => {
  return (
    <div>
      // ...
      <NoSsr>
        <TranslateAll />
      </NoSsr>
    </div>
  );
};

export default Page;`}
              </code>
            </pre>
          </div>
          <div className="flex flex-col gap-4 text-primary mt-2">
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

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default Page;
