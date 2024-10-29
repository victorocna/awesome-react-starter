import { classnames } from '@lib';

const LabeledSelect = ({ extraClass = '', id, label, onChange, options, value }) => {
  return (
    <div className={classnames('relative rounded-lg border border-gray-400', extraClass)}>
      <label className="absolute left-0 top-0 px-2 pt-2 text-xs text-gray-400" id={`${id}-label`}>
        <span>{label}</span>
      </label>
      <select
        aria-labelledby={`${id}-label`}
        className="mt-4 w-full cursor-pointer appearance-none bg-transparent p-2 pt-3"
        id={id}
        onChange={onChange}
        value={value}
      >
        <option hidden value=""></option>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LabeledSelect;
