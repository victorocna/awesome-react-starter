import { formatDistance } from 'date-fns';

const ago = (date) => {
  try {
    return formatDistance(new Date(date), new Date());
  } catch (err) {
    return '';
  }
};

export default ago;
