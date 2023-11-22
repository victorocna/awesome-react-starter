import { axiosAuth } from '@lib';

export const uploadDocument = (file) => {
  const formData = new FormData();
  formData.append('document', file);

  return axiosAuth.post('/file/upload', formData);
};

export const complexForm = (data) => {
  return axiosAuth.post('/file/complex-form', data);
};
