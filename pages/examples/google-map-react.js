import { Map } from '../../components';
import { Dropdown } from '../../components/Fields';
import { Layout } from '../../examples/components';

const Page = () => {
  return (
    <Layout title="Dropdown">
      <div className="prose-sm">
        <p className="mt-0">
          <strong>Lorem Ipsum is simply dummy text of the printing and typesetting industry</strong>
          <br />
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
          unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>

        <div className="mb-4 w-80">
          <label htmlFor="#" className="cursor-pointer mb-0">
            County
          </label>
          <Dropdown>
            <option value="B">București</option>
            <option value="IF">Ilfov</option>
          </Dropdown>
        </div>
        <div className="mb-4 w-80">
          <label htmlFor="#" className="cursor-pointer mb-0">
            Locality / Sector
          </label>
          <Dropdown>
            <option value="1">Bucureşti (Sectorul 1)</option>
            <option value="2">Bucureşti (Sectorul 2)</option>
            <option value="3">Bucureşti (Sectorul 3)</option>
            <option value="4">Bucureşti (Sectorul 4)</option>
            <option value="5">Bucureşti (Sectorul 5)</option>
            <option value="6">Bucureşti (Sectorul 6)</option>
          </Dropdown>
        </div>

        <Map />
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
