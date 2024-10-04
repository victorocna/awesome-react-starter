const { lastDayOfMonth, isLeapYear } = require('date-fns');

export const months = [
  { value: 1, label: 'January' },
  { value: 2, label: 'February' },
  { value: 3, label: 'March' },
  { value: 4, label: 'April' },
  { value: 5, label: 'May' },
  { value: 6, label: 'June' },
  { value: 7, label: 'July' },
  { value: 8, label: 'August' },
  { value: 9, label: 'September' },
  { value: 10, label: 'October' },
  { value: 11, label: 'November' },
  { value: 12, label: 'December' },
];

export const getDays = (month, year) => {
  let lastDay;
  if (!year) {
    const daysInMonth = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    lastDay = daysInMonth[month - 1] || 31;
  } else {
    lastDay = lastDayOfMonth(new Date(year, month - 1)).getDate();
  }

  return Array.from({ length: lastDay }, (_, i) => ({ value: i + 1, label: i + 1 }));
};

const YEARS = 100;

export const getYears = (month, day) => {
  const currentYear = new Date().getFullYear();

  const years = Array.from({ length: YEARS }, (_, i) => ({
    value: currentYear - i,
    label: currentYear - i,
  }));

  if (Number(month) === 2 && Number(day) === 29) {
    return years.filter(({ value }) => isLeapYear(new Date(value, month - 1, day)));
  }

  return years;
};

export const isValidDate = (day, month, year) => {
  if (!day || !month || !year) {
    return false;
  }

  const date = new Date(year, month - 1, day);
  return date.getDate() === Number(day) && date.getMonth() === Number(month) - 1;
};
