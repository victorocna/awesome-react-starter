import { Menu, Tooltip, MenuButton, ShowMore } from '../../components';

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
              <h3>Show more elements</h3>
              <p>A quick element you can use to temporarly hide content from your interface.</p>
              <ShowMore>
                <div>Hidden at first, viewable after you click on show more</div>
                <div>You can add anything you want as children of the show more component.</div>
              </ShowMore>
              <p>
                Bacon ipsum dolor amet pork belly venison tongue, hamburger short loin spare ribs
                alcatra swine cow kielbasa boudin. Burgdoggen meatloaf drumstick ground round
                biltong pork. Tri-tip pig ground round, tail brisket shankle tongue jerky beef ribs
                venison tenderloin bacon strip steak. Tail biltong pork chop alcatra bresaola pork
                loin.
              </p>
              <ShowMore label="Optional info" visible={true}>
                <div>The same show more components, but with a twist.</div>
                <div>Visible on first render and with a custom label.</div>
              </ShowMore>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
