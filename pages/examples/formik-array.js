import { ArrayField } from '@components/Fields';
import { Form, Submit } from '@components/Formik';
import { AddReasonItem, Layout, ReasonsArrayItem } from '@examples/components';
import { initialValues, validationSchema } from '@examples/models/array-form';
import { Formik } from 'formik';

const Page = () => {
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(false);
  };

  return (
    <Layout title="Formik forms">
      <div>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4" debug>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg">Add reasons why you like coding (or remove them).</h3>
              <p>
                An <strong>array field</strong> is ideal here, especially when users need to enter
                an unknown number of values in a form. <br />
                Be sure to include add and remove buttons, as they are essential features of array
                fields.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              <ArrayField
                AddComponent={AddReasonItem}
                SectionComponent={ReasonsArrayItem}
                name="reasons"
                emptyRow={{ reason: '' }}
              />
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
