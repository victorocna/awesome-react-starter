import { Link } from '../components';

const ThankYouPage = () => (
  <main className="cover min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <div className="flex flex-col w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <Link href="/login">
        <a className="hover:underline">← back to login</a>
      </Link>
      <h2 className="font-bold text-2xl mb-4">Thank you for creating a new account</h2>
      <img
        className="w-full mb-4"
        src="https://media.giphy.com/media/dmt0NRgroyTPW/giphy.gif"
        alt="Patrick hooray"
      />
      <h3 className="text-lg font-bold mb-4">Next steps:</h3>
      <ol className="list-decimal">
        <li>You will receive a confirmation email. Use it to confirm your account.</li>
        <li>After confirming your account, you will be able to access the app.</li>
      </ol>
    </div>
  </main>
);

export default ThankYouPage;
