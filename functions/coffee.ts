const coffee = (miliseconds = 5000): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('☕'), miliseconds);
  });
};

export default coffee;
