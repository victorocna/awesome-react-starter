import { withAuth } from '@auth';
import { Menu, MenuButton, Tooltip } from '@components';
import { TodoBox } from '@examples/components/Todos';

const Page = () => (
  <div className="flex min-h-screen bg-gray-100 font-body text-sm">
    <Menu />
    <main className="max w-full p-4 lg:col-span-5 lg:p-8 xl:px-12">
      <div className="mb-12 flex items-center">
        <div className="flex flex-1">
          <h3 className="text-2xl font-semibold">Todo list</h3>
          <Tooltip placement="bottom">Manage your todo list with this simple interface</Tooltip>
        </div>
        <MenuButton />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <TodoBox />
        <div className="flex flex-col gap-4 rounded bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Help is on its way</h3>
          <p>
            Shoulder pancetta cow, tail ground round brisket swine turducken landjaeger. Shankle
            chicken shoulder, ham pancetta kevin leberkas pork loin brisket pork ball tip strip
            steak. Short loin ham beef meatball meatloaf pastrami shank shankle burgdoggen turkey
            ham hock jerky chicken. Frankfurter meatball shank pig. Picanha buffalo fatback t-bone
            meatloaf. Sausage pancetta rump doner buffalo. Ground round ball tip cow turducken,
            tri-tip hamburger biltong shoulder boudin prosciutto andouille flank bacon.
          </p>
        </div>
      </div>
    </main>
  </div>
);

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

export default withAuth(Page);
