import fetch from './fetch';

const refreshToken = async (cookie) => {
  const { token } = await fetch(`/refresh-token`, {
    withAuth: true,
    method: 'POST',
    headers: { cookie },
  });

  return token;
};

export default refreshToken;
