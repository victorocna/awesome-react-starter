import { Overflow } from '@components';
import { Layout } from '@examples/components';

const Page = () => {
  return (
    <Layout title="Overflow">
      <div className="prose-sm">
        <p role="description" className="mt-0">
          Overflow components help you truncate a very long text. <br /> They should be used for
          user generated text that needs to have a maximum width.
        </p>
        <section className="flex gap-2">
          <Overflow>
            <div className="w-60 rounded bg-purple-800 px-2 text-white">
              A very very long text wrapped in the overflow element
            </div>
          </Overflow>
          <Overflow>
            <div className="w-60 rounded bg-yellow-200 px-2 text-black">
              Another overflowing element that should be truncated
            </div>
          </Overflow>
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

export default Page;
