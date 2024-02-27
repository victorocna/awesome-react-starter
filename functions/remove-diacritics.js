const removeDiacritics = (str) => {
  return str.normalize('NFKD').replace(/[^\w\s.,-_/]/g, '');
};

export default removeDiacritics;
