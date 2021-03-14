import React from 'react';

const TodoName = ({ done, name }) => {
  const classes = ['flex-1'];
  if (done) {
    classes.push('line-through');
  }
  const className = classes.join(' ');

  return <span className={className}>{name}</span>;
};

export default TodoName;
