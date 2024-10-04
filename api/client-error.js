import { axiosAuth } from '@lib';

export const createError = async (data) => {
  return await axiosAuth.post(`client-errors`, data);
};
