import { DatePicker, Email, PlusMinus, TimePicker } from '@components/Fields';
import { Field, Form, HookForm, Submit } from '@components/HookForm';
import { Layout } from '@examples/components';
import { initialValues, validationSchema } from '@examples/models/form';

const Page = () => {
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
  };

  return (
    <Layout title="React hook forms">
      <div className="prose-sm">
        <HookForm
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4" debug>
            <div className="md:w-1/2">
              <Field as={Email} help="Required info" label="Basic email field" name="email" />
            </div>
            <div className="w-full">
              <Field as={PlusMinus} label="Basic plus-minus field" name="quantity" />
            </div>
            <div className="w-80">
              <Field as={DatePicker} label="Check-in date picker" name="checkInDate" />
            </div>
            <div className="w-80">
              <Field as={TimePicker} label="Check-in time picker" name="checkInTime" />
            </div>
            <Submit className="button full primary">Submit</Submit>
          </Form>
        </HookForm>
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
