import { Button } from '@components';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="my-8 flex w-full max-w-xl flex-col rounded-lg bg-white px-4 py-8 lg:px-12">
        <div className="text-center">
          <p className="my-4 text-lg font-semibold">
            We are sorry, an error occurred that prevents us from displaying the page correctly.
          </p>
          <p className="my-4 text-lg font-semibold">
            Please rewrite the link or press the button below.
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
