import { withAuth } from '@auth';
import { Layout } from '@components';
import { TodoBox } from '@examples/components/Todos';

const Page = () => {
  return (
    <Layout title="To Do List">
      <div className="grid gap-4 md:grid-cols-2">
        <TodoBox />
        <section>
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
        </section>
      </div>
    </Layout>
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

export default withAuth(Page);
