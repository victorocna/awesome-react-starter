import { Button } from '@components';
import { Dropdown, Search } from '@components/Fields';
import { FilterModal } from '@components/Forms/Filters';
import { Fieldset } from '@components/HookForm';
import { Layout } from '@examples/components';
import { initialValues } from '@examples/models/todo-filters';
import { useDisclosure } from '@hooks';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

const Page = () => {
  const [options, setOptions] = useState({});
  const { hide, isOpen, show } = useDisclosure();

  const applyFilterLogic = (values) => {
    setOptions(values);
    hide();
  };

  const calculateActiveFilters = (values, initialValues) => {
    return Object.keys(values).reduce((acc, key) => {
      if (values[key] !== initialValues[key]) {
        return acc + 1;
      }
      return acc;
    }, 0);
  };

  return (
    <Layout title="Filter Modal">
      <>
        <div className="prose-sm hidden lg:block">
          <p>
            This page is only available on mobile. Please toggle the mobile view in your browser's
            developer tools.
          </p>
        </div>
        <div className="lg:hidden">
          <p className="mt-2 text-sm text-gray-600">
            This is an example of a filter modal. You can add any filters you want in this modal.
          </p>
          <div className="mt-4">
            <Button className="button mini primary" onClick={show}>
              Open Filter Modal
            </Button>
            <FilterModal
              applyFilterLogic={applyFilterLogic}
              calculateActiveFilters={calculateActiveFilters}
              hide={hide}
              initialValues={initialValues}
              isOpen={isOpen}
              title="Filtrează căutări"
              values={options}
            >
              {(methods) => (
                <div className="flex flex-col gap-2 px-4 py-3">
                  <Fieldset
                    label="Search your todos"
                    name="search"
                    help="At least 3 characters are required for a search"
                  >
                    <Controller
                      control={methods.control}
                      name="search"
                      render={({ field }) => (
                        <Search {...field} id="search" placeholder="Search by name or #tag" />
                      )}
                    />
                  </Fieldset>
                  <Fieldset
                    label="Search by todo status"
                    name="only"
                    help="Select an item from the dropdown"
                  >
                    <Controller
                      control={methods.control}
                      name="only"
                      render={({ field }) => (
                        <Dropdown {...field} id="only" placeholder="Search by status">
                          <option value="all">All</option>
                          <option value="completed">Completed</option>
                          <option value="pending">Pending</option>
                        </Dropdown>
                      )}
                    />
                  </Fieldset>
                </div>
              )}
            </FilterModal>
          </div>
          <div className="mt-4">
            <p>
              <strong>Options:</strong>
            </p>
            <pre className="text-sm text-gray-600">{JSON.stringify(options, null, 2)}</pre>
          </div>
        </div>
      </>
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
