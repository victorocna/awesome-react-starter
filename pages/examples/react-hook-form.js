import { DatePicker, Email, PlusMinus, TimePicker } from '@components/Fields';
import { Field, Fieldset, Form, HookForm, Submit } from '@components/HookForm';
import { Layout } from '@examples/components';
import { initialValues, validationSchema } from '@examples/models/form';

const Page = () => {
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
  };

  return (
    <Layout title="Formik forms">
      <div className="prose-sm">
        <HookForm
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4" debug={true}>
            <Fieldset name="email" label="Basic email field">
              <Field id="email" name="email" as={Email} className="input md:w-1/2" />
            </Fieldset>

            <Fieldset name="quantity" label="Basic plus-minus field">
              <Field id="quantity" name="quantity" as={PlusMinus} />
            </Fieldset>

            <div className="w-80">
              <Fieldset name="checkInDate" label="Check-in date picker">
                <Field id="checkInDate" name="checkInDate" as={DatePicker} />
              </Fieldset>
            </div>

            <div className="w-80">
              <Fieldset name="checkInTime" label="Check-in time picker">
                <Field id="checkInTime" name="checkInTime" as={TimePicker} />
              </Fieldset>
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
