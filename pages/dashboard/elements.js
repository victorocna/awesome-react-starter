import { Menu, Tooltip, MenuButton, Button } from '../../components';

const Page = () => {
  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <Menu />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12 space-y-4">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Elements</h3>
            <Tooltip placement="bottom">Just another tooltip</Tooltip>
          </div>
          <MenuButton />
        </div>
        <div className="grid gap-4">
          <div className="bg-white rounded border border-gray-300 p-4">
            <div className="prose-sm">
              <h3>Buttons</h3>
              <p>These are some buttons. Hover over them to see them in action</p>
              <div className="flex items-center space-x-2">
                <Button className="square-button square-button-primary">Primary</Button>
                <Button className="square-button square-button-secondary">Secondary</Button>
                <Button className="square-button square-button-accent">Accent</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
