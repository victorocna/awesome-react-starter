import ensureUser from './ensure-user';

const checkAuth = async (context, callback) => {
  const {
    req: { cookies, headers },
  } = context;

  try {
    const token = await ensureUser(cookies[process.env.JWT_TOKEN_NAME], headers);

    // Pass the props to the page from the callback or an empty object
    const props = typeof callback === 'function' ? (await callback(token, context)) ?? {} : {};
    return { props };
  } catch (err) {
    console.error('Could not ensure user is logged in or refresh their token');
    console.error(err);

    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }
};

export default checkAuth;
