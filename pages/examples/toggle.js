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
      <div className="prose-sm">
        <h3 className="mt-0">Example #1</h3>
        <p className="mb-1">Classic toggle with default label</p>
        <Toggle />

        <h3 className="mt-0">Example #2</h3>
        <p className="mb-1">Classic toggle with custom label</p>
        <Toggle label="Custom label" />

        <h3 className="mt-0">Example #3</h3>
        <p className="mb-1">Disabled toggle</p>
        <Toggle label="Disabled" initialState={false} disabled={true} />

        <h3 className="mt-0">Example #4</h3>
        <p className="mb-1">Toggle enabled by default</p>
        <Toggle initialState={true} label="Enabled" />

        <h3 className="mt-0">Example #5</h3>
        <p className="mb-1">Disabled toggle with initialStae set to true</p>
        <Toggle initialState={true} label="Disabled enabled" disabled={true} />

        <h3 className="mt-0">Example #6</h3>
        <p className="mb-1">Toggle with custom onTrigger callback</p>
        <Toggle onToggle={onToggle} />

        <h3 className="mt-0">Example #7</h3>
        <p className="mb-1">Toggle with custom stlying applied (via extraClass prop)</p>
        <Toggle
          extraClass="peer-checked:bg-violet-600 peer-focus:ring-violet-300"
          label="Violet toggle"
        />
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
