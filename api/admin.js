import { axiosAuth } from '@lib';

export const changePassword = (data) => {
  return axiosAuth.post('/admin/change-password', data);
};
