import { axios } from '@lib';

/**
 * Refreshes the JWT token by making a request to the `/refresh-token` endpoint.
 * Stores the new token in the application's state.
 *
 * @async
 * @function
 * @returns {Promise<string>} The refreshed JWT token.
 * @throws {Error} If the request fails.
 */
const refreshToken = async () => {
  const { token } = await axios({
    url: '/refresh-token',
    method: 'post',
    data: {},
    withCredentials: true,
  });

  return token;
};

export default refreshToken;
