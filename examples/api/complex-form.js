import { axiosAuth } from '../../lib';

export const createComplexForm = (data) => {
  return axiosAuth.post('complex-forms', data);
};

export const deleteTodo = (id) => {
  return axiosAuth.delete(`complex-form/${id}`);
};

export const checkTodo = ({ id, done }) => {
  return axiosAuth({
    url: `complex-form/${id}/check`,
    method: done ? 'delete' : 'post',
  });
};
