import { format } from 'date-fns';
import { ro } from 'date-fns/locale';
import getYear from 'date-fns/getYear';

const dateLocaleRo = (date) => {
  try {
    if (getYear(new Date(date)) === getYear(new Date())) {
      return format(new Date(date), 'dd MMMM', { locale: ro });
    }
    return format(new Date(date), 'dd MMMM yyyy', { locale: ro });
  } catch (err) {
    return '';
  }
};

export default dateLocaleRo;
