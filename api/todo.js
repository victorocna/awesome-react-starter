import { axios } from '../services/api';

export const readManyTodos = ({ pageParam = 0 }) => {
  return axios.get(`todos?limit=3&offset=${pageParam}`);
};

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
