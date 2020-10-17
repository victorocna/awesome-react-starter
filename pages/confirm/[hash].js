import { Confirm } from '../../components/Identity';
import { Link, withRouter } from '../../components';

const ConfirmPage = ({ hash }) => (
  <main className="cover min-h-screen px-4 py-8 flex flex-col items-center justify-center">
    <img className="h-16" src="/images/ichessclub.png" />
    <div className="w-full px-4 lg:px-12 py-8 my-8 bg-white rounded-lg max-w-xl">
      <Link href="/login">
        <a className="hover:underline">← back to login</a>
      </Link>
      <h2 className="font-bold text-2xl mb-4">Account confirmation</h2>
      <Confirm hash={hash} />
    </div>
  </main>
);

export default withRouter(ConfirmPage);
