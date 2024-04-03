import { Button } from '@components';

const ErrorLayout = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col justify-center items-center">
        <div className="flex gap-5 w-full p-6 bg-red-200 opacity-80 border-1 border-red-700 drop-shadow-sm rounded items-start">
          <i className="fa-solid fa-circle-xmark text-red-500 text-lg"></i>
          <div className="flex flex-col gap-3 text-red-800">
            <p className="font-medium ">
              We are sorry, an error occurred that prevents us from displaying the page correctly.
            </p>
            <Button
              href="/"
              className="text-sm hover:bg-red-300 hover:text-red-800 p-1.5 ml-[-6px] max-w-fit rounded"
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
