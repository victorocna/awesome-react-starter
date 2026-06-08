import { formatDistance } from 'date-fns';

const ago = (date: string | number | Date): string => {
  try {
    return formatDistance(new Date(date), new Date());
  } catch {
    return '';
  }
};

export default ago;
