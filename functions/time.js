import { format as dateFormat } from 'date-fns';
import { ro } from 'date-fns/locale';

const time = (date, format = 'd MMMM yyyy') => {
  try {
    return dateFormat(new Date(date), format, { locale: ro });
  } catch (err) {
    return 'N/A';
  }
};

export default time;
