import React from 'react';

const Number = (props) => {
  const handleWheel = (event) => {
    // prevents changing value of input[type=number]:focus, when user scrolls down the page
    event.target.blur();
  };

  return (
    <input
      type="number"
      inputMode="number"
      className="form-input"
      onWheel={handleWheel}
      {...props}
    />
  );
};

export default Number;
