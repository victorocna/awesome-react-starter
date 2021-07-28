import { Layout, Pill } from '../../components';

const Page = () => {
  return (
    <Layout title="Components">
      <h3>Pills</h3>
      <p role="description">Small labels that help qualify information.</p>
      <section className="flex gap-2">
        <Pill>Default pill</Pill>
        <Pill className="bg-yellow-200">Yellow pill</Pill>
        <Pill className="bg-purple-800 text-white">Purple pill</Pill>
      </section>
    </Layout>
  );
};

export default Page;
