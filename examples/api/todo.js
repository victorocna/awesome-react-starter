import { axiosAuth } from '@lib';

export const createTodo = (data) => {
  return axiosAuth.post('admin/todos', data);
};

export const deleteTodo = (id) => {
  return axiosAuth.delete(`admin/todos/${id}`);
};

export const checkTodo = ({ id, done }) => {
  return axiosAuth({
    url: `admin/todos/${id}/check`,
    method: done ? 'delete' : 'post',
  });
};
