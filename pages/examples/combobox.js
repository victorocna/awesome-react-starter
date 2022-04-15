import { Menu, MenuButton } from '../../components';
import { Combobox } from '../../components/Fields';
import { countries } from '../../data';

const Page = () => {
  const showCountries = (country) => (
    <option key={country.value} value={country.value}>
      {country.label}
    </option>
  );

  return (
    <div className="font-body text-sm min-h-screen bg-gray-100 flex">
      <Menu />
      <main className="max w-full lg:col-span-5 p-4 lg:p-8 xl:px-12">
        <div className="flex items-center mb-12">
          <div className="flex flex-1">
            <h3 className="text-2xl font-semibold">Combobox</h3>
          </div>
          <MenuButton />
        </div>
        <div className="grid gap-4">
          <div className="bg-white rounded border border-gray-300 p-6">
            <div className="prose-sm">
              <p>
                <strong>A dropdown and an autocomplete in the same component</strong>
                <br />
                Combobox elements are an extended version of the dropdown element based on the
                awesome NPM package <code>downshift</code>
              </p>

              <div className="mb-4 w-80">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Simple combobox
                </label>
                <Combobox>
                  <option value="marguerita">Pizza marguerita</option>
                  <option value="salami">Pizza salami</option>
                  <option value="capriciosa">Pizza capriciosa</option>
                </Combobox>
              </div>

              <div className="mb-4 w-80">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Combobox with countries
                </label>
                <Combobox>{countries.map(showCountries)}</Combobox>
              </div>

              <div className="mb-4 w-80">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Country combobox with placeholder
                </label>
                <Combobox placeholder="Select a country">{countries.map(showCountries)}</Combobox>
              </div>

              <div className="mb-4 w-80">
                <label htmlFor="#" className="cursor-pointer mb-0">
                  Country combobox with default selection
                </label>
                <Combobox defaultSelected="DEU">{countries.map(showCountries)}</Combobox>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
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
