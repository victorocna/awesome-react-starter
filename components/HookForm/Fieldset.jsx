import { classnames } from '@lib';
import { get } from 'lodash';
import { useFormContext } from 'react-hook-form';

const Fieldset = ({ label, help, name, children }) => {
  const {
    formState: { errors, isSubmitted },
  } = useFormContext();

  const hasError = get(errors, name) && isSubmitted;
  const showHelp = hasError || Boolean(help);

  return (
    <fieldset className={classnames(hasError && 'has-error')}>
      {label && (
        <label htmlFor={name} className="form-label mb-0 w-full cursor-pointer">
          {label}
        </label>
      )}
      {children}
      {showHelp && (
        <div className="form-help flex items-center gap-1 text-xs text-gray-400">
          <span>{hasError ? get(errors, name).message : help}</span>
        </div>
      )}
    </fieldset>
  );
};

export default Fieldset;
