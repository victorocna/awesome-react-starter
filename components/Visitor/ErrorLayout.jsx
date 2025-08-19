import { Button } from '@components';

const ErrorLayout = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="border-1 flex w-full items-start gap-5 rounded border-red-700 bg-red-200 p-6 opacity-80 drop-shadow-sm">
          <i className="fa-solid fa-circle-xmark text-lg text-red-500"></i>
          <div className="flex flex-col gap-3 text-red-800">
            <p className="font-medium">
              We are sorry, an error occurred that prevents us from displaying the page correctly.
            </p>
            <Button
              href="/"
              className="ml-[-6px] max-w-fit rounded p-1.5 text-sm hover:bg-red-300 hover:text-red-800"
            >
              Back to the main page
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorLayout;
