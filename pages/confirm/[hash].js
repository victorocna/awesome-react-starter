import { Link, withRouter } from '@components';
import { Confirm } from '@components/Identity';

const Page = ({ hash }) => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <img className="h-16" src="/images/ichessclub.png" />
      <div className="my-8 w-full max-w-xl rounded-lg bg-white px-4 py-8 lg:px-12">
        <Link href="/login" className="hover:underline">
          ← back to login
        </Link>
        <h2 className="mb-4 text-2xl font-bold">Account confirmation</h2>
        <Confirm hash={hash} />
      </div>
    </main>
  );
};

export default withRouter(Page);
