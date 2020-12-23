import { Layout } from '../../components/Demo';
import { Button } from '../../components';
import { fetch } from '../../services/api';
import { toaster } from '../../functions';

const Page = () => {
  const handleClick = async () => {
    try {
      const { message } = await fetch('give-me-cookies');
      toaster.success(message);
    } catch ({ message }) {
      toaster.error(`Error! ${message}`);
    }
  };

  return (
    <Layout>
      <h1 className="font-semibold mb-4">Netlify Test</h1>
      <Button onClick={handleClick}>Give me some cookies</Button>
    </Layout>
  );
};

export default Page;
