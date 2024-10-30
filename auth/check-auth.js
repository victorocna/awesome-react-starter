import { axios } from '@lib';
import isRouteAllowed from './is-route-allowed';

const checkAuth = async (context, callback) => {
  const {
    req: { cookies, headers },
  } = context;
  const refreshToken = cookies[process.env.JWT_TOKEN_NAME];

  if (!refreshToken) {
    return { redirect: { destination: '/login', permanent: false } };
  }

  try {
    const { token } = await axios({
      url: '/refresh-token',
      method: 'post',
      headers: { cookie: headers.cookie },
      data: {},
      withCredentials: true,
    });

    if (!isRouteAllowed(context.resolvedUrl, token)) {
      return { redirect: { destination: '/login', permanent: false } };
    }

    // Callback function with token for additional props
    const props = callback ? await callback(token, context) : {};
    return { props };
  } catch (err) {
    console.error('Authentication failed:', err);
    return { redirect: { destination: '/login', permanent: false } };
  }
};

export default checkAuth;
