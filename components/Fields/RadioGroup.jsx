import RadioContext from './RadioContext';

const RadioGroup = ({ name, selectedValue, onChange, className, children }) => {
  return (
    <RadioContext.Provider value={{ name, selectedValue, onChange }}>
      <div className={className}>{children}</div>
    </RadioContext.Provider>
  );
};

export default RadioGroup;
