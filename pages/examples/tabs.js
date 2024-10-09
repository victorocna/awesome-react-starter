import { withAuth } from '@auth';
import { Tabs } from '@components';
import { Layout } from '@examples/components';
import { useState } from 'react';

const Page = () => {
  const [currentTab, setCurrentTab] = useState('all');

  const options = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected' },
  ];

  const disabledOptions = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending', disabled: true },
    { value: 'approved', label: 'Approved' },
    { value: 'rejected', label: 'Rejected', disabled: true },
  ];

  const optionsWithDefault = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'approved', label: 'Approved', default: true },
    { value: 'rejected', label: 'Rejected' },
  ];

  return (
    <Layout title="Tabs">
      <div className="prose-sm">
        <h3 className="mt-0">Example #1</h3>
        <p className="mb-1">Basic tabs component with a setState for callback</p>
        <Tabs options={options} callback={setCurrentTab} />
        <p>
          Current selected value: <span class="font-bold">{currentTab}</span>
        </p>
        <h3 className="mt-0">Example #2</h3>
        <p className="mb-1">Tabs component with disabled items</p>
        <Tabs options={disabledOptions} />
        <h3 className="mt-0">Example #3</h3>
        <p className="mb-1">Tabs component with custom styling applied via props</p>
        <Tabs
          options={options}
          extraContainerClass="border-secondary"
          extraOptionClass="border-accent"
        />
        <h3 className="mt-0">Example #4</h3>
        <p className="mb-1">Tabs component with custom default option</p>
        <Tabs options={optionsWithDefault} />
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
