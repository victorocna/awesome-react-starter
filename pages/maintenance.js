import { sitename } from '@site.config';

const Page = () => {
  return (
    <main className="cover flex min-h-screen flex-col items-center justify-center px-4 py-8">
      <div className="my-8 flex w-full max-w-xl flex-col rounded-lg bg-white px-4 py-8 lg:px-12">
        <div className="text-center">
          <img className="mx-auto mb-6 w-32 md:w-44" src="/images/logo.png" alt={sitename} />
          <p className="mb-6 font-body text-lg md:text-xl">
            We are currently performing maintenance to improve user experience.
          </p>
          <p className="mb-6 font-body text-sm text-gray-600 md:text-base">
            We'll be back online soon. Thank you for your patience and understanding!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
