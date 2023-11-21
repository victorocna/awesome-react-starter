import { axiosAuth } from '@lib';

export const uploadDocument = (file) => {
  const formData = new FormData();
  formData.append('document', file);

  return axiosAuth.post('/file/upload', formData);
};
