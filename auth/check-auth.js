import ensureUser from './ensure-user';

const checkAuth = async (context) => {
  try {
    await ensureUser(context.req.headers.cookie);
  } catch (err) {
    console.warn('Could not ensure user is logged in or refresh their token');
    console.error(err);

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
