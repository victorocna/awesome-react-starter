import { TimePicker } from '@components/Fields';
import { Layout } from '@components';
import { TimePickerForm } from '@examples/components/Forms';

const Page = () => {
  return (
    <>
      <div className="prose-sm">
        <h3 className="mt-0">Example #1</h3>
        <p className="mb-1">Basic time picker</p>
        <TimePicker placeholder="Select time" />

        <h3 className="mt-4">Example #2</h3>
        <p className="mb-1">Time picker with default value</p>
        <TimePicker value={'12:00'} />

        <h3 className="mt-4">Example #3</h3>
        <p className="mb-1">Time Picker in React Hook Form</p>
        <div className="flex gap-2">
          <TimePickerForm />
        </div>

        <h3 className="mt-4">Example #4</h3>
        <p className="mb-1">Time picker with interval</p>
        <TimePicker interval={5} placeholder="Select time" />

        <h3 className="mt-4">Example #5</h3>
        <p className="mb-1">Disabled time picker</p>
        <TimePicker disabled value={'12:00'} />
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
  return <Layout title="Time Picker">{page}</Layout>;
};
