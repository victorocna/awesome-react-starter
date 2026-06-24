import { ModeToggle } from '@components';
import { ForgotForm } from '@components/Forms';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@components/ui/breadcrumb';
import { Card, CardContent, CardHeader, CardTitle } from '@components/ui/card';

/**
 * Forgot password page component.
 * Displays the recovery form with theme support toggling.
 * 
 * @returns {React.ReactElement} The rendered forgot password page.
 */
const Page = () => {
  return (
    <main className="cover relative flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>
      <Card className="w-full max-w-md">

        <CardHeader>
          <Breadcrumb>
            <BreadcrumbList className="p-0">
              <BreadcrumbItem>
                <BreadcrumbLink href="/login">Login</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Forgot Password</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <CardTitle>Password recovery</CardTitle>
        </CardHeader>
        <CardContent>
          <ForgotForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default Page;
