import { Link } from '@components';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="my-8 flex w-full max-w-xl flex-col rounded-lg bg-white px-4 py-8 lg:px-12">
        <Link href="/login" className="hover:underline">
          ← back to login
        </Link>
        <h2 className="mb-4 text-2xl font-bold">Thank you for creating a new account</h2>
        <img
          className="mb-4 w-full"
          src="https://media.giphy.com/media/dmt0NRgroyTPW/giphy.gif"
          alt="Patrick hooray"
        />
        <h3 className="mb-4 text-lg font-bold">Next steps:</h3>
        <ol className="list-decimal">
          <li>You will receive a confirmation email. Use it to confirm your account.</li>
          <li>After confirming your account, you will be able to access the app.</li>
        </ol>
      </div>
    </main>
  );
};

export default Page;
