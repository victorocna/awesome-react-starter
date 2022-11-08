import { axiosAuth } from '../lib';

export const updatePassword = (data) => {
  return axiosAuth.post('/admin/change-password', data);
};
