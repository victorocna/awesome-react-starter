import { ModeToggle } from '@components';
import { SignupForm } from '@components/Forms';
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
 * Signup page component.
 * Displays the signup form with theme support toggling.
 * 
 * @returns {React.ReactElement} The rendered signup page.
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
                <BreadcrumbPage>Create a new account</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <CardTitle>Create a new account</CardTitle>
        </CardHeader>
        <CardContent>
          <SignupForm />
        </CardContent>
      </Card>
    </main>
  );
};

export default Page;
