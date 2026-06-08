import { format } from 'date-fns';

const formatDate = (date: string | number | Date, dateFormat = 'yyyy-MM-dd'): string => {
  return format(new Date(date), dateFormat);
};

export default formatDate;
