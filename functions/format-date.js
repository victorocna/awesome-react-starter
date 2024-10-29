import { format } from 'date-fns';

const formatDate = (date, dateFormat = 'yyyy-MM-dd') => {
  return format(new Date(date), dateFormat);
};

export default formatDate;
