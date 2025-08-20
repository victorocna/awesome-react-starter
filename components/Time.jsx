import { time } from '@functions';

const Time = (info) => {
  const value = info.getValue();

  return time(value);
};

export default Time;
