import { Layout } from '@components';
import { Checkbox, DatePicker, Email, Select } from '@components/Fields';
import { ArrayField, Field, Fieldset, Form, HookForm, Submit } from '@components/HookForm';
import { Button } from '@components/ui/button';
import { FieldGroup } from '@components/ui/field';
import { Input } from '@components/ui/input';
import { SelectItem } from '@components/ui/select';
import { Textarea } from '@components/ui/textarea';
import Link from 'next/link';
import { useFieldArray, useFormContext } from 'react-hook-form';
import { toast } from 'sonner';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  title: Yup.string().min(5, 'Title must be at least 5 chars').required('Title is required'),
  description: Yup.string()
    .min(10, 'Description must be at least 10 chars')
    .required('Description is required'),
  email: Yup.string().email('Enter a valid email').required('Email is required'),
  urgency: Yup.string().required('Please select urgency'),
  newsletter: Yup.boolean(),
  steps: Yup.array()
    .of(
      Yup.object().shape({
        step: Yup.string().required('Step content is required'),
      })
    )
    .min(1, 'Please provide at least one step'),
});

const initialValues = {
  title: '',
  description: '',
  email: '',
  urgency: 'medium',
  newsletter: true,
  steps: [{ step: '' }],
};

const ArrayAddLogs = ({ name, emptyRow }) => {
  const { control } = useFormContext();
  const { insert } = useFieldArray({ control, name });

  return (
    <div className="flex items-center gap-4 py-2">
      <h4 className="text-sm font-semibold">Reproduction Steps</h4>
      <Button
        type="button"
        className="button mini primary text-xs"
        onClick={() => {
          insert(0, emptyRow || {});
        }}
      >
        Add Step
      </Button>
    </div>
  );
};

const ArrayListLogs = ({ name, sections }) => {
  const { control } = useFormContext();
  const { remove } = useFieldArray({ control, name });

  const showSections = (section, index) => {
    return (
      <div className="flex items-center gap-2 mb-2" key={section.id || index}>
        <div className="flex-1">
          <Field
            as={Input}
            placeholder={`Step ${index + 1} description`}
            name={`${name}.${index}.step`}
          />
        </div>
        {sections.length > 1 && (
          <Button
            type="button"
            className="button mini accent text-xs"
            onClick={() => {
              remove(index);
            }}
          >
            Remove
          </Button>
        )}
      </div>
    );
  };

  return sections.map(showSections);
};

/**
 * React page component that renders the advanced form demonstration using
 * HookForm context.
 *
 * @returns {React.ReactElement} The Page element.
 */
export default function Page() {
  const handleSubmit = async (values) => {
    toast.success('Form submitted successfully!', {
      description: JSON.stringify(values, null, 2),
    });
    return;
  };

  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <div className="flex items-center gap-4">
                <Button asChild variant="link" size="xs" className="px-0">
                  <Link target="_blank" href="https://react-hook-form.com">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="max-w-xl py-4">
              <HookForm
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={handleSubmit}
              >
                <Form className="flex flex-col gap-6" debug={true}>
                  <div className="flex flex-col gap-4">
                    <Field
                      as={Input}
                      name="title"
                      label="Issue Title"
                      help="Provide a short descriptive title"
                    />

                    <Field
                      as={Textarea}
                      name="description"
                      label="Detailed Description"
                      help="Describe the issue in detail"
                    />

                    <Field
                      as={Email}
                      name="email"
                      label="Reporter Email"
                      help="We will contact you here"
                    />

                    <div>
                      <label className="text-sm font-medium mb-1 block">Urgency Level</label>
                      <Field as={Select} name="urgency" placeholder="Select Urgency">
                        <SelectItem value="low">
                          <span className="size-2 bg-green-500 rounded-full"></span>Low
                        </SelectItem>
                        <SelectItem value="medium">
                          <span className="size-2 bg-yellow-500 rounded-full"></span>Medium
                        </SelectItem>
                        <SelectItem value="high">
                          <span className="size-2 bg-red-500 rounded-full"></span>High
                        </SelectItem>
                      </Field>
                    </div>

                    <FieldGroup>
                      <Fieldset
                        label="Communication Preferences"
                        help="Select your preferences for receiving updates"
                      >
                        <FieldGroup data-slot="checkbox-group">
                          <Field
                            as={Checkbox}
                            name="newsletter"
                            label="Subscribe to system alerts"
                            orientation="horizontal"
                          />
                        </FieldGroup>
                      </Fieldset>
                    </FieldGroup>

                    <div className="border p-4 rounded-lg bg-muted/10">
                      <ArrayField
                        AddComponent={ArrayAddLogs}
                        SectionComponent={ArrayListLogs}
                        name="steps"
                        emptyRow={{ step: '' }}
                      />
                    </div>
                  </div>

                  <Field
                    as={DatePicker}
                    name="date"
                    label="Date of Occurrence"
                    help="When did the issue occur?"
                  />

                  <Submit>Submit Issue</Submit>
                </Form>
              </HookForm>
            </div>
          </>
  );
}

/**
 * Server-side function to retrieve properties or handle static pre-rendering rules.
 *
 * @returns {Promise<object>} Returns the layout page properties.
 */
export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="React Hook Form">{page}</Layout>;
};
