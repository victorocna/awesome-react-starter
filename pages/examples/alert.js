import { Layout } from '@components';
import { Alert, AlertAction, AlertDescription, AlertTitle } from '@components/ui/alert';
import { Button } from '@components/ui/button';
import { AlertCircleIcon, AlertTriangleIcon, CheckCircle2Icon } from 'lucide-react';
import Link from 'next/link';

function AlertBasic() {
  return (
    <Alert className="max-w-md">
      <CheckCircle2Icon />
      <AlertTitle>Account updated successfully</AlertTitle>
      <AlertDescription>
        Your profile information has been saved. Changes will be reflected immediately.
      </AlertDescription>
    </Alert>
  );
}

function AlertDestructive() {
  return (
    <Alert variant="destructive" className="max-w-md">
      <AlertCircleIcon />
      <AlertTitle>Payment failed</AlertTitle>
      <AlertDescription>
        Your payment could not be processed. Please check your payment method and try again.
      </AlertDescription>
    </Alert>
  );
}

function AlertActionExample() {
  return (
    <Alert className="max-w-md">
      <AlertTitle>Dark mode is now available</AlertTitle>
      <AlertDescription>Enable it under your profile settings to get started.</AlertDescription>
      <AlertAction>
        <Button size="xs" variant="default">
          Enable
        </Button>
      </AlertAction>
    </Alert>
  );
}

function AlertColors() {
  return (
    <Alert className="max-w-md border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-50">
      <AlertTriangleIcon />
      <AlertTitle>Your subscription will expire in 3 days.</AlertTitle>
      <AlertDescription>
        Renew now to avoid service interruption or upgrade to a paid plan to continue using the
        service.
      </AlertDescription>
    </Alert>
  );
}

export default function Page() {
  return (
    <>
            <div className="flex items-center gap-4">
              <p className="text-sm">Displays a callout for user attention.</p>
              <Button asChild variant="link">
                <Link target="_blank" href="https://ui.shadcn.com/docs/components/radix/alert">
                  See Documentation
                </Link>
              </Button>
            </div>

            <div className="flex flex-col gap-2">
              <p>A basic alert with an icon, title and description.</p>
              <AlertBasic />
            </div>

            <div className="flex flex-col gap-2">
              <p>Use variant="destructive" to create a destructive alert.</p>
              <AlertDestructive />
            </div>

            <div className="flex flex-col gap-2">
              <p>Use AlertAction to add a button or other action element to the alert.</p>
              <AlertActionExample />
            </div>

            <div className="flex flex-col gap-2">
              <p>
                You can customize the alert colors by adding custom classes such as bg-amber-50
                dark:bg-amber-950 to the Alert component.
              </p>
              <AlertColors />
            </div>
          </>
  );
}


/**
 * Attaches the default layout to the page.
 *
 * @param {React.ReactNode} page - The page content.
 * @returns {React.ReactElement} The layout wrapper.
 */
Page.getLayout = function getLayout(page) {
  return <Layout title="Alert">{page}</Layout>;
};
