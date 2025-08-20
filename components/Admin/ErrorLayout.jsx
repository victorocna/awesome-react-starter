import { Layout } from '@components';

const ErrorLayout = () => {
  return (
    <Layout title="Error">
      <div className="flex flex-col items-center justify-center">
        <div className="border-1 flex w-full items-center gap-5 rounded border-red-700 bg-red-200 p-6 opacity-80 drop-shadow-sm">
          <i className="fa-solid fa-circle-xmark text-lg text-red-500"></i>
          <p className="font-medium text-red-800">
            We are sorry, an error occurred that prevents us from displaying the page correctly.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorLayout;
