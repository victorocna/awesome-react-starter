import React from 'react';

const Plural = ({ one, many, count = 0 }) => (
  <>
    {count} {count === 1 ? one : many}
  </>
);

export default Plural;
