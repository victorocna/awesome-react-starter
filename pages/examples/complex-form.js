import { complexForm, uploadDocument } from '@api/example';
import {
  Checkbox,
  Combobox,
  Dropdown,
  Email,
  Input,
  Number,
  Password,
  Phone,
  Radio,
  RadioGroup,
  Select,
  Textarea,
} from '@components/Fields';
import { Datepicker, Fieldset, FileUpload, Form, PlusMinus, Submit } from '@components/Formik';
import { Layout } from '@examples/components';
import { initialValues, validationSchema } from '@examples/models/complex-form';
import { useMutation } from '@hooks';
import { toaster } from '@lib';
import { Field, Formik } from 'formik';
import { useState } from 'react';

const Page = () => {
  const [file, setFile] = useState(null);
  const [video, setVideo] = useState(null);

  const uploadDocumentMutation = useMutation(uploadDocument, {
    onSuccess: () => {
      return;
    },
  });

  const complexFormMutation = useMutation(complexForm, {
    onSuccess: async () => {
      if (file) {
        await uploadDocumentMutation.mutateAsync(file);
      }

      if (video) {
        await uploadDocumentMutation.mutateAsync(video);
      }

      return toaster.success('Form submitted successfully');
    },
  });

  const handleSubmit = async (values, actions) => {
    await complexFormMutation.mutateAsync(values);
    //eslint-disable-next-line
    console.log(values);
    actions.setSubmitting(false);
  };

  return (
    <Layout title="Complex form">
      <div className="prose-sm">
        <p>
          <strong>Oh yes, forms!</strong> How elusive and hard to get right they always seem to be.{' '}
          <br />
          Here you are going to find all possible form fields and how to use them.
        </p>
        <Formik
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-4">
            <Fieldset name="basic_input" label="Basic text input">
              <Field
                id="basic_input"
                name="basic_input"
                as={Input}
                placeholder="Insert catchy text here"
              />
            </Fieldset>

            <Fieldset name="textarea" label="Textarea">
              <Field
                id="textarea"
                name="textarea"
                as={Textarea}
                placeholder="Insert catchy text here"
              />
            </Fieldset>

            <div className="mb-4 grid gap-4 md:grid-cols-3">
              <Fieldset name="email" label="Email" help="Email input">
                <Field
                  id="email"
                  name="email"
                  as={Email}
                  placeholder="Insert your cool email address here"
                />
              </Fieldset>
              <Fieldset name="phone" label="Phone" help="Phone number input">
                <Field
                  id="phone"
                  name="phone"
                  as={Phone}
                  placeholder="Insert your cool phone number here"
                />
              </Fieldset>
              <Fieldset name="number" label="Number" help="Number input">
                <Field
                  id="number"
                  name="number"
                  as={Number}
                  placeholder="Pick a number, any number"
                />
              </Fieldset>
            </div>

            <div className="mb-4 grid gap-4 md:grid-cols-3">
              <Fieldset name="basic_select" label="Basic select">
                <Field
                  id="basic_select"
                  name="basic_select"
                  as={Select}
                  placeholder="Where are you from?"
                >
                  <option value="1">Europe</option>
                  <option value="2">Asia</option>
                  <option value="3">Americas</option>
                  <option value="4">Africa</option>
                  <option value="5">Oceania</option>
                  <option value="6">Antarctica (I'm a penguin)</option>
                </Field>
              </Fieldset>
              <Fieldset name="basic_dropdown" label="Basic dropdown">
                <Field
                  id="basic_dropdown"
                  name="basic_dropdown"
                  as={Dropdown}
                  placeholder="Where are you from?"
                >
                  <option value="1">Europe</option>
                  <option value="2">Asia</option>
                  <option value="3">Americas</option>
                  <option value="4">Africa</option>
                  <option value="5">Oceania</option>
                  <option value="6">Antarctica (I'm a penguin)</option>
                </Field>
              </Fieldset>
              <Fieldset name="basic_combobox" label="Basic combobox">
                <Field
                  id="basic_combobox"
                  name="basic_combobox"
                  as={Combobox}
                  placeholder="Where are you from?"
                >
                  <option value="1">Europe</option>
                  <option value="2">Asia</option>
                  <option value="3">Americas</option>
                  <option value="4">Africa</option>
                  <option value="5">Oceania</option>
                  <option value="6">Antarctica (I'm a penguin)</option>
                </Field>
              </Fieldset>
            </div>

            <div className="w-80">
              <Fieldset name="checkIn" label="Check-in datepicker">
                <Field id="checkIn" name="checkIn" as={Datepicker} />
              </Fieldset>
            </div>

            <Fieldset name="password" label="Password input">
              <Field
                id="password"
                name="password"
                as={Password}
                placeholder="Insert ultra-safe password here"
              />
            </Fieldset>

            <div className="flex gap-2">
              <Fieldset name="checkbox1">
                <Field id="checkbox1" name="checkbox1" as={Checkbox}>
                  Checkbox1
                </Field>
              </Fieldset>
              <Fieldset name="checkbox2">
                <Field id="checkbox2" name="checkbox2" as={Checkbox}>
                  Checkbox2
                </Field>
              </Fieldset>
              <Fieldset name="checkbox3">
                <Field id="checkbox3" name="checkbox3" as={Checkbox}>
                  Checkbox3
                </Field>
              </Fieldset>
              <Fieldset name="checkbox3">
                <Field id="checkbox3" name="checkbox3" as={Checkbox} disabled>
                  Checkbox4 (disabled)
                </Field>
              </Fieldset>
            </div>

            <Fieldset name="Radiogroup">
              <Field id="radiogroup" name="radiogroup" as={RadioGroup}>
                <Radio value="green">Green</Radio>
                <Radio value="red">Red</Radio>
                <Radio value="yellow" disabled>
                  Yellow (disabled)
                </Radio>
                <Radio value="purple">Purple</Radio>
              </Field>
            </Fieldset>

            <Fieldset name="quantity" label="Basic plus-minus field">
              <Field id="quantity" name="quantity" as={PlusMinus} />
            </Fieldset>

            <FileUpload
              setFile={setFile}
              label="Image upload"
              placeholder="Upload image"
              fieldValue="imageName"
              buttonClasses="button full w-64 shadow-md px-4 border-indigo-400 bg-indigo-100 text-primary rounded-lg"
              accept="image/jpeg, image/png"
            />

            <FileUpload
              setFile={setVideo}
              label="Video upload"
              placeholder="Upload video"
              fieldValue="videoName"
              buttonClasses="button full w-64 shadow-md px-4 border-indigo-400 bg-indigo-100 text-primary rounded-lg"
              accept="video/*"
            />

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
