import { Button } from '@components';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="my-8 flex w-full max-w-xl flex-col rounded-lg bg-white px-4 py-8 lg:px-12">
        <div className="text-center">
          <p className="text-lg font-semibold my-4">
            This page does not exist, has been moved or deleted from the website.
          </p>
          <p className="text-lg font-semibold my-4">
            Try to rewrite the link or press the button below.
          </p>
          <Button href="/" className="button full mt-2 primary">
            Back to the main page
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
