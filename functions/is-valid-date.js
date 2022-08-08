import { isValid } from 'date-fns';

const isValidDate = (date) => {
  try {
    if (typeof date === 'string') {
      return isValid(new Date(date));
    }
    if (typeof date === 'object') {
      return isValid(date);
    }
    return false;
  } catch {
    return false;
  }
};

export default isValidDate;
