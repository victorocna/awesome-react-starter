import { Menu, Tooltip, MenuButton, Button } from '../../components';

const Page = () => {
  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <Menu />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Buttons</h3>
            <Tooltip placement="bottom">Just another tooltip</Tooltip>
          </div>
          <MenuButton />
        </div>
        <div className="grid gap-4">
          <div className="bg-white rounded border border-gray-300 p-4">
            <div className="prose-sm">
              <h3>Classic buttons</h3>
              <div className="flex items-center gap-2">
                <Button className="button full primary">Primary</Button>
                <Button className="button full secondary">Secondary</Button>
                <Button className="button full accent">Accent</Button>
              </div>

              <h3>Square buttons</h3>
              <div className="flex items-center gap-2">
                <Button className="button full primary">Primary</Button>
                <Button className="button full secondary">Secondary</Button>
                <Button className="button full accent">Accent</Button>
              </div>

              <h3>Mini buttons</h3>
              <div className="flex items-center gap-2">
                <Button className="button mini primary">Primary</Button>
                <Button className="button mini secondary">Secondary</Button>
                <Button className="button mini accent">Accent</Button>
              </div>

              <h3>Buttons with different sizes</h3>
              <div className="flex items-center gap-2">
                <Button className="button full primary text-xs">Primary</Button>
                <Button className="button full secondary text-xl">Secondary</Button>
                <Button className="button full accent text-base">Accent</Button>
              </div>

              <h3>Buttons with state</h3>
              <div className="flex items-center gap-2">
                <Button className="button full primary" disabled>
                  Disabled
                </Button>
              </div>

              <h3>Full width buttons</h3>
              <div className="flex items-center gap-2">
                <Button className="button full secondary w-full">Really really long</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
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
