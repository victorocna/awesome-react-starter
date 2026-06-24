import { Layout } from '@components';
import Link from 'next/link';
import { Button } from '@components/ui/button';
import { FieldGroup, Field, FieldLabel, FieldDescription, FieldError } from '@components/ui/field';
import { Input } from '@components/ui/input';

export default function Page() {
  return (
    <>
            <div className="flex flex-col gap-2 border-b pb-4">
              <h2 className="text-xl font-bold font-heading">Field & FieldGroup</h2>
              <div className="flex items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  Standard form elements wrappers with validation states.
                </p>
                <Button asChild variant="link" size="xs">
                  <Link target="_blank" href="https://ui.shadcn.com/docs/components/field">
                    See Documentation
                  </Link>
                </Button>
              </div>
            </div>

            <div className="flex flex-1 items-start justify-start py-4">
              
            <div className="max-w-md">
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="field-mail">Email Address</FieldLabel>
                  <Input id="field-mail" placeholder="user@domain.com" />
                  <FieldDescription>We respect your privacy policy.</FieldDescription>
                </Field>

                <Field data-invalid>
                  <FieldLabel htmlFor="field-invalid">Phone Number</FieldLabel>
                  <Input id="field-invalid" aria-invalid="true" placeholder="+1..." />
                  <FieldError>Please enter a valid phone number sequence.</FieldError>
                </Field>
              </FieldGroup>
            </div>
    
            </div>
          </>
  );
}

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
  return <Layout title="Field & FieldGroup">{page}</Layout>;
};
