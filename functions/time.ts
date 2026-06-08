import { format as dateFormat } from 'date-fns';
import { ro } from 'date-fns/locale';

const time = (date: string | number | Date, format = 'd MMMM yyyy'): string => {
  try {
    return dateFormat(new Date(date), format, { locale: ro });
  } catch {
    return 'N/A';
  }
};

export default time;
