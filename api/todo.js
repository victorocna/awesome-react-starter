import { axios } from '../services/api';

export const createTodo = (data) => {
  return axios.post('todos', data);
};

export const deleteTodo = (id) => {
  axios.delete(`todos/${id}`);
};

export const checkTodo = ({ id, done }) => {
  axios({
    url: `todos/${id}/check`,
    method: done ? 'delete' : 'post',
  });
};
