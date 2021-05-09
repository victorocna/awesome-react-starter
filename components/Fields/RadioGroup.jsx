import { RadioContext } from '.';

const RadioGroup = ({ name, onChange, className, children }) => {
  return (
    <RadioContext.Provider value={{ name, onChange }}>
      <div className={className}>{children}</div>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
