import { DatePicker } from '@components/Fields';
import { Layout } from '@examples/components';
import { DatePickerForm } from '@examples/components/Forms';
import { format } from 'date-fns';
import { useState } from 'react';

const Page = () => {
  const today = format(new Date(), 'yyyy-MM-dd');
  const [checkIn, setCheckIn] = useState(today);
  const [checkOut, setCheckOut] = useState();

  return (
    <Layout title="Date Picker">
      <div className="prose-sm">
        <h3 className="mt-0">Example #1</h3>
        <p className="mb-1">Classic date picker with default value</p>
        <div className="flex gap-2">
          <div className="w-80">
            <label htmlFor="checkIn" className="mb-0 cursor-pointer">
              Check-in date
            </label>
            <DatePicker id="checkIn" value={checkIn} onChange={setCheckIn} />
            <span>Selected check-in date: {checkIn}</span>
          </div>
        </div>

        <h3 className="mt-4">Example #2</h3>
        <p className="mb-1">Read only date picker without default value and minimum date</p>
        <div className="flex gap-2">
          <div className="w-80">
            <label htmlFor="checkOut" className="mb-0 cursor-pointer">
              Check-out date
            </label>
            <DatePicker
              id="checkOut"
              value={checkOut}
              onChange={setCheckOut}
              readOnly={true}
              calendarProps={{ minDate: new Date(checkIn) }}
            />
            <span>Selected check-out date: {checkOut}</span>
          </div>
        </div>

        <h3 className="mt-4">Example #3</h3>
        <p className="mb-1">Date Picker in React Hook Form</p>
        <div className="flex gap-2">
          <DatePickerForm />
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
