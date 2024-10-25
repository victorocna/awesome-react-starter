import { Link } from '@components';
import { LoginForm } from '@components/Forms';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="my-8 flex w-full max-w-xl flex-col rounded-lg bg-white px-4 py-8 lg:px-12">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        <LoginForm />
        <div className="mt-2">
          <Link href="/forgot" className="text-gray-600">
            Forgot password?
          </Link>
        </div>
        <div className="mt-2">
          <Link href="/signup" className="text-gray-600">
            <span className="mr-1">No account yet?</span>
            <span className="font-bold text-purple-800">Signup now</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Page;
