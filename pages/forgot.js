import { Link } from '@components';
import { ForgotForm } from '@components/Forms';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="my-8 flex w-full max-w-xl flex-col rounded-lg bg-white px-4 py-8 lg:px-12">
        <Link href="/login">
          <a className="hover:underline">← back to login</a>
        </Link>
        <h2 className="mb-4 text-2xl font-bold">Password recovery</h2>
        <ForgotForm />
      </div>
    </main>
  );
};

export default Page;
