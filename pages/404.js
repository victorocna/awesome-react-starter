import { Button } from '@components';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="my-8 flex w-full max-w-xl flex-col rounded-lg bg-white px-4 py-8 lg:px-12">
        <div className="text-center">
          <p className="my-4 text-lg font-semibold">
            This page does not exist, has been moved or deleted from the website.
          </p>
          <p className="my-4 text-lg font-semibold">
            Try to rewrite the link or press the button below.
          </p>
          <Button href="/" className="button full primary mt-2">
            Back to the main page
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
