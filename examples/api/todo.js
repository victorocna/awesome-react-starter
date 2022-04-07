import { axiosAuth } from '../../lib';

export const createTodo = (data) => {
  return axiosAuth.post('todos', data);
};

export const deleteTodo = (id) => {
  return axiosAuth.delete(`todos/${id}`);
};

export const checkTodo = ({ id, done }) => {
  return axiosAuth({
    url: `todos/${id}/check`,
    method: done ? 'delete' : 'post',
  });
};
