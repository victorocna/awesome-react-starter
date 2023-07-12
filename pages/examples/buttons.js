import { Button } from '@components';
import { Layout } from '@examples/components';

const Page = () => {
  return (
    <Layout title="Buttons">
      <div className="prose-sm">
        <h3 className="mt-0">Classic buttons</h3>
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
