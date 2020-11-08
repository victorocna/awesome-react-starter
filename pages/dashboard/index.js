import { checkAuth, withAuth } from '../../services/auth';

const Dashboard = () => (
  <main>
    <h1>Admin Dashboard</h1>
  </main>
);

export async function getServerSideProps(context) {
  return await checkAuth(context);
}

export default withAuth(Dashboard);
