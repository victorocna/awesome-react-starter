import ensureUser from './ensure-user';

const checkAuth = async (context) => {
  try {
    await ensureUser(context.req.headers.cookie);
  } catch (err) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default checkAuth;
