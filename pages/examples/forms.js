import { Button, Spinner } from '@components';
import {
  Checkbox,
  Combobox,
  DatePicker,
  Dropdown,
  Fieldset,
  Input,
  Password,
  PlusMinus,
  Radio,
  RadioGroup,
  Select,
  Textarea,
} from '@components/Fields';
import { Layout } from '@examples/components';
import { useState } from 'react';

const Page = () => {
  const [isLoading, setLoading] = useState(false);

  return (
    <Layout title="Forms">
      <div className="prose-sm">
        <p>
          <strong>Oh yes, forms!</strong> How elusive and hard to get right they always seem to be.{' '}
          <br />
          This page should visually help you determine if the styles are what you expect. Nothing
          more, nothing less.
        </p>
        <div className="mb-4">
          <label htmlFor="easy" className="mb-0 cursor-pointer">
            Basic input field
          </label>
          <Input id="easy" placeholder="Well, this was easy" />
        </div>
        <div className="mb-4">
          <label htmlFor="bio" className="mb-0 cursor-pointer">
            Basic textarea field
          </label>
          <Textarea id="bio" placeholder="Bio, notes, you name it!" />
        </div>
        <div className="-mx-4 mb-4 bg-primary px-6 py-2 text-white">
          Now what we covered the simple form elements, let's get into the more complex ones.
          <br />
          Also notice how this element defies its parent padding class. Inspect it to see how its
          done. Tip: negative margins
        </div>
        <div>
          <h3>Fieldsets</h3>
          <p>Next we have some inputs with label and help sections called fieldsets.</p>
        </div>
        <div className="mb-4 grid gap-4 md:grid-cols-3">
          <Fieldset label="Your email" help="Give your users a helping hand">
            <Input type="email" inputMode="email" />
          </Fieldset>
          <Fieldset label="Your phone number" help="Optional info">
            <Input type="tel" inputMode="tel" />
          </Fieldset>
          <Fieldset label="Your age" help="Cannot be smaller than 1">
            <Input type="number" inputMode="number" />
          </Fieldset>
        </div>
        <div className="-mx-4 mb-4 bg-secondary px-6 py-2 text-white">
          Enough inputs for now. We still have many other form elements.
          <br />
          Next stop, select boxes with some funky variations
        </div>
        <div className="mb-4 grid gap-4 md:grid-cols-3">
          <div>
            <label className="mb-0">Basic select</label>
            <Select placeholder="Where are you from?">
              <option value="1">Europe</option>
              <option value="2">Asia</option>
              <option value="3">Americas</option>
              <option value="4">Africa</option>
              <option value="5">Oceania</option>
              <option value="6">Antarctica (I'm a penguin)</option>
            </Select>
          </div>
          <div>
            <label className="mb-0">Or maybe you prefer a dropdown</label>
            <Dropdown>
              <option value="1">Europe</option>
              <option value="2">Asia</option>
              <option value="3">Americas</option>
              <option value="4">Africa</option>
              <option value="5">Oceania</option>
              <option value="6">Antarctica (I'm a penguin)</option>
            </Dropdown>
          </div>
          <div>
            <label className="mb-0">Or even a searchable combobox</label>
            <Combobox>
              <option value="1">Europe</option>
              <option value="2">Asia</option>
              <option value="3">Americas</option>
              <option value="4">Africa</option>
              <option value="5">Oceania</option>
              <option value="6">Antarctica (I'm a penguin)</option>
            </Combobox>
          </div>
        </div>
        <div className="mb-4">
          <h3>Date pickers</h3>
          <p>
            Pick or write any date and display them in any format. That's how versatile a date
            picker should be.
          </p>
          <div className="mb-4 grid gap-4 md:grid-cols-3">
            <DatePicker name="date-picker" placeholder="yyyy-MM-dd" />
          </div>
        </div>
        <div className="mb-4">
          <h3>Passwords</h3>
          <p>Password inputs should always have the option of toggling the password visibility.</p>
          <div className="mb-4 grid gap-4 md:grid-cols-3">
            <Password autoComplete="one-time-code" placeholder="**********" />
          </div>
        </div>
        <div className="mb-4">
          <h3>Choose your favourite color (multiple options)</h3>
          <p>
            This is an excelent place for checkboxes. When the user has to choose one and only one
            option, that is when radio groups should be used.
          </p>
          <div className="md:flex md:items-center md:gap-2">
            <Checkbox value="green">Green</Checkbox>
            <Checkbox value="red" defaultChecked>
              Red
            </Checkbox>
            <Checkbox value="yellow" disabled={true}>
              Yellow (disabled)
            </Checkbox>
            <Checkbox value="purple">Purple</Checkbox>
          </div>
        </div>
        <div className="mb-4">
          <h3>Choose your favourite color (one option)</h3>
          <p>
            This is an excelent place for a radio group. When the user has to choose one and only
            one option, that is when radio groups should be used. <br />
            Below we have a disabled readio button. Usually, you should style it differently so that
            the user can immediately tell it cannot click it.
          </p>
          <RadioGroup name="favouriteColor" selectedValue="red">
            <Radio value="green">Green</Radio>
            <Radio value="red">Red</Radio>
            <Radio value="yellow" disabled={true}>
              Yellow (disabled)
            </Radio>
            <Radio value="purple">Purple</Radio>
          </RadioGroup>
        </div>
        <div className="mb-4">
          <h3>Basic plus-minus field</h3>
          <PlusMinus value={1} min={0} max={100} />
        </div>
        <div className="mb-4">
          <h3>The submit button</h3>
          <p>
            This should be your primary button. But instead of submitting the form, it only shows
            the loading indicator.
          </p>
          <div className="flex items-center gap-2">
            <Button className="button full primary" onClick={() => setLoading(!isLoading)}>
              Show me
            </Button>
            <Spinner show={isLoading} />
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
