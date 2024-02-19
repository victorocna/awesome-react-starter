import Cookies from 'js-cookie';
import { local } from 'store2';
import { v4 } from 'uuid';

export const setCookie = (name, data) => {
  const uuid = v4();
  // Save data in local storage with a unique identifier
  local.set(uuid, data);
  // Save the identifier in a session cookie
  Cookies.set(name, uuid, { sameSite: 'strict' });
};

export const getCookie = (name) => {
  const uuid = Cookies.get(name);
  // Retrieve data from local storage using the identifier
  return local.get(uuid);
};

export const removeCookie = (name) => {
  const uuid = Cookies.get(name);
  // Remove data from local storage using the identifier
  local.remove(uuid);
  // Remove the identifier from the session cookie
  Cookies.remove(name);
};

export const appendCookie = (name, data) => {
  const uuid = Cookies.get(name);
  // Retrieve data from local storage using the identifier
  const current = local.get(uuid);
  // Merge the new data with the current data
  local.set(uuid, { ...current, ...data });
};

const formCookie = {
  set: setCookie,
  get: getCookie,
  remove: removeCookie,
  append: appendCookie,
};

export default formCookie;
