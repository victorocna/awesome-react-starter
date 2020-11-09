import { createStore } from 'redux';

function inMemoryJwt(state = null, action) {
  switch (action.type) {
    case 'SET':
      return action.jwt;
    case 'REMOVE':
      return null;
    default:
      return state;
  }
}

export const store = createStore(inMemoryJwt);

store.subscribe(() => console.log(store.getState()))

export default store;
