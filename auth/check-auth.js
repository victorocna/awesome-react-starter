import ensureUser from './ensure-user';

const checkAuth = async (context, callback) => {
  try {
    await ensureUser(context.req.headers.cookie);

    // Pass the props to the page from the callback or an empty object
    const props = typeof callback === 'function' ? await callback() : {};
    return { props };
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
};

export default checkAuth;
