import { Link } from '@components';
import { SignupForm } from '@components/Forms';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="my-8 w-full max-w-xl rounded-lg bg-white px-4 py-8 lg:px-12">
        <Link href="/login" className="hover:underline">
          ← back to login
        </Link>
        <h2 className="mb-4 text-2xl font-bold">Create a new account</h2>
        <SignupForm />
      </div>
    </main>
  );
};

export default Page;
