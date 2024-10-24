import { withAuth } from '@auth';
import { Button, ContextMenu } from '@components';
import { Layout } from '@examples/components';
import { useState } from 'react';

const Page = () => {
  const [showOptions, setShowOptions] = useState('admin');

  const options = [
    {
      label: 'Option 1',
      onClick: () => alert('Option 1'),
    },
    {
      label: 'Option 2',
      onClick: () => alert('Option 2'),
    },
  ];

  const linkOptions = [
    {
      label: 'Link 1',
      href: '/examples/buttons',
    },
    {
      label: 'Link 2',
      href: '/examples/context-menu',
    },
  ];

  const mixedOptions = [
    {
      label: 'Option 1',
      onClick: () => alert('Option 1'),
    },
    {
      label: 'Link 1',
      href: '/examples/buttons',
    },
  ];

  const userAndAdminOptions = [
    {
      label: 'Admin option 1',
      onClick: () => alert('Admin option 1'),
      renderCondition: showOptions === 'admin',
    },
    {
      label: 'Admin option 2',
      onClick: () => setShowOptions('Admin option 2'),
      renderCondition: showOptions === 'admin',
    },
    {
      label: 'User option 1',
      onClick: () => alert('User option 1'),
      renderCondition: showOptions === 'user',
    },
    {
      label: 'User option 2',
      onClick: () => alert('User option 2'),
      renderCondition: showOptions === 'user',
    },
  ];

  return (
    <Layout title="Context Menu">
      <div className="prose-sm">
        <h3 className="mt-0">Example #1</h3>
        <p>Context menu with options that have onClick (will execute a function when clicked)</p>
        <div className="w-36 not-prose">
          <ContextMenu options={options}>
            <i className="fa-solid fa-ellipsis-vertical text-xl" />
          </ContextMenu>
        </div>
        <h3 className="mt-4">Example #2</h3>
        <p>Context menu with options that have href (will redirect to a new page when clicked)</p>
        <div className="w-36 not-prose">
          <ContextMenu options={linkOptions}>
            <i className="fa-solid fa-ellipsis-vertical text-xl" />
          </ContextMenu>
        </div>
        <h3 className="mt-4">Example #3</h3>
        <p>
          Context menu with mixed options (some have onClick and some have href) and renderCondition
        </p>
        <div className="w-36 not-prose">
          <ContextMenu options={mixedOptions}>
            <i className="fa-solid fa-ellipsis-vertical text-xl" />
          </ContextMenu>
        </div>
        <h3 className="mt-4">Example #4</h3>
        <p>Context menu with custom button (is given as a child of the component)</p>
        <div className="w-44 not-prose">
          <ContextMenu options={options}>
            <Button className="button full primary">Custom button</Button>
          </ContextMenu>
        </div>
        <h3 className="mt-4">Example #5</h3>
        <p>
          Context menu with options that have renderCondition (will only show options that match the
          condition)
        </p>
        <div className="w-36 not-prose">
          <ContextMenu options={userAndAdminOptions}>
            <i className="fa-solid fa-ellipsis-vertical text-xl" />
          </ContextMenu>
        </div>
        <p>
          Currently showing options for: <span className="font-bold">{showOptions}</span> (used to
          demonstrate renderCondition)
        </p>
        <div className="flex gap-2">
          <Button onClick={() => setShowOptions('admin')} className="button full primary">
            Show admin options
          </Button>
          <Button onClick={() => setShowOptions('user')} className="button full primary">
            Show user options
          </Button>
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

export default withAuth(Page);
