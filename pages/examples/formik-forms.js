import { Field, Formik } from 'formik';
import { Fieldset, Form, PlusMinus, Submit } from '../../components/Formik';
import { Layout } from '../../examples/components';
import { initialValues, validationSchema } from '../../models/form';

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
            <Fieldset name="plusMinusField" label="Basic plus-minus field">
              <Field id="plusMinusField" name="plusMinusField" as={PlusMinus} />
            </Fieldset>

            <Submit className="button full primary">Signup</Submit>
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
