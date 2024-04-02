import { axiosAuth } from '@lib';

const createError = async (data) => {
  return await axiosAuth.post(`client-errors`, data);
};

export default createError;
