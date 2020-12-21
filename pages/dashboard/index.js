import { checkAuth, withAuth } from '../../services/auth';
import { Layout, Quote } from '../../components/Demo';

const Dashboard = () => (
  <Layout>
    <h1 className="font-semibold mb-4">Dashboard</h1>
    <Quote />
  </Layout>
);

export default Dashboard;
