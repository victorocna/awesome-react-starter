export const getTodoClasses = (done) => {
  const classes = [];
  if (done) {
    classes.push('line-through');
  }
  return classes.join(' ');
};
