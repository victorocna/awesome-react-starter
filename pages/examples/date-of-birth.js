import { DateOfBirth } from '@components/Fields';
import { Layout } from '@examples/components';
import { format, isValid } from 'date-fns';
import { useState } from 'react';

const Page = () => {
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [dateOfBirthWithDefaultValue, setDateOfBirthWithDefaultValue] = useState('1990-01-01');

  const handleChange = (date) => {
    if (isValid(date)) {
      setDateOfBirth(format(date, 'yyyy-MM-dd'));
    } else {
      setDateOfBirth('');
    }
  };

  const handleChangeWithDefaultValue = (date) => {
    if (isValid(date)) {
      setDateOfBirthWithDefaultValue(format(date, 'yyyy-MM-dd'));
    } else {
      setDateOfBirthWithDefaultValue('');
    }
  };

  return (
    <Layout title="Date of birth">
      <div className="prose-sm">
        <h3 className="mt-0">Example #1</h3>
        <p className="mb-1">Classic date of birth field</p>
        <div className="flex gap-2">
          <div className="w-80">
            <label className="mb-0 cursor-pointer">Date of birth</label>
            <DateOfBirth onChange={handleChange} value={dateOfBirth} />
            <span>Selected date of birth (YYYY-MM-DD): {dateOfBirth}</span>
          </div>
        </div>

        <h3 className="mt-4">Example #2</h3>
        <p className="mb-1">Classic date of birth field with default value</p>
        <div className="flex gap-2">
          <div className="w-80">
            <label className="mb-0 cursor-pointer">Date of birth</label>
            <DateOfBirth
              onChange={handleChangeWithDefaultValue}
              value={dateOfBirthWithDefaultValue}
            />
            <span>Selected date of birth (YYYY-MM-DD): {dateOfBirthWithDefaultValue}</span>
          </div>
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
