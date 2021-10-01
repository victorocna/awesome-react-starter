const coffee = (miliseconds = 5000) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('☕'), miliseconds);
  });
};

export default coffee;
