import { checkAuth, withAuth } from '../../auth';
import { Menu, MenuButton, Tooltip } from '../../components';
import { TodoBox } from '../../examples/components/Todos';

const Page = () => (
  <div className="font-body text-sm min-h-screen bg-gray-100 flex">
    <Menu />
    <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
      <div className="flex items-center mb-12">
        <div className="flex flex-1">
          <h3 className="text-2xl font-semibold">Todo list</h3>
          <Tooltip placement="bottom">Manage your todo list with this simple interface</Tooltip>
        </div>
        <MenuButton />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <TodoBox />
        <div className="p-4 bg-white rounded shadow flex flex-col gap-4">
          <h3 className="font-semibold text-lg">Help is on its way</h3>
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

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Page);
