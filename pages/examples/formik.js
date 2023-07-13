import { Datepicker, Fieldset, Form, PlusMinus, Submit } from '@components/Formik';
import { Layout } from '@examples/components';
import { initialValues, validationSchema } from '@examples/models/form';
import { Field, Formik } from 'formik';

const Page = () => {
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
  };

  return (
    <Layout title="Formik forms">
      <div className="prose-sm">
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4" debug>
            <Fieldset name="quantity" label="Basic plus-minus field">
              <Field id="quantity" name="quantity" as={PlusMinus} />
            </Fieldset>

            <div className="w-80">
              <Fieldset name="checkIn" label="Check-in datepicker">
                <Field id="checkIn" name="checkIn" as={Datepicker} />
              </Fieldset>
            </div>

            <Submit className="button full primary">Submit</Submit>
          </Form>
        </Formik>
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
