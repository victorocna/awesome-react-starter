import { DateOfBirth } from '@components/Fields';
import { Layout } from '@components';
import { DateOfBirthForm } from '@examples/components/Forms';
import { isValidDate } from '@functions';
import { useState } from 'react';

const Page = () => {
  // Demo state
  const [dateOfBirth, setDateOfBirth] = useState('');
  const handleChange = (date) => {
    return isValidDate(date) ? setDateOfBirth(date) : setDateOfBirth('');
  };

  return (
    <>
      <div className="prose-sm">
        <h3 className="mt-0">Example #1</h3>
        <p className="mb-1">Classic date of birth field</p>
        <div className="flex gap-2">
          <div className="w-80">
            <span>Date of birth</span>
            <DateOfBirth onChange={handleChange} value={dateOfBirth} />
            <span>Selected date of birth (YYYY-MM-DD): {dateOfBirth}</span>
          </div>
        </div>

        <h3 className="mt-4">Example #2</h3>
        <p className="mb-1">Date of birth in React Hook Form with initial values</p>
        <div className="flex gap-2">
          <DateOfBirthForm />
        </div>
      </div>
    </>
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


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Date of birth">{page}</Layout>;
};
