import { withAuth } from '@auth';
import { Toggle } from '@components';
import { Layout } from '@examples/components';

const Page = () => {
  const onToggle = (isChecked) => {
    const message = isChecked ? 'Enabled' : 'Disabled';
    alert(`Toggle is ${message}`);
  };

  return (
    <Layout title="Toggle">
      <div class="prose-sm">
        <h3 className="mt-0">Example #1</h3>
        <p className="mb-1">Classic toggle with default label</p>
        <Toggle />
        <h3 className="mt-0">Example #2</h3>
        <p className="mb-1">Classic toggle with custom label</p>
        <Toggle label="Custom label" />
        <h3 className="mt-0">Example #3</h3>
        <p className="mb-1">Disabled toggle</p>
        <Toggle label="Disabled" initialState={false} disabled />
        <h3 className="mt-0">Example #4</h3>
        <p className="mb-1">Toggle enabled by default</p>
        <Toggle initialState={true} label="Enabled" />
        <h3 className="mt-0">Example #5</h3>
        <p className="mb-1">Disabled toggle with initialStae set to true</p>
        <Toggle initialState={true} label="Disabled enabled" disabled />
        <h3 className="mt-0">Example #6</h3>
        <p className="mb-1">Toggle with custom onTrigger callback</p>
        <Toggle onToggle={onToggle} />
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
