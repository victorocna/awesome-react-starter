import { classnames } from '@lib';
import { useFormContext } from 'react-hook-form';

const Fieldset = ({ label, help, name, children }) => {
  const {
    formState: { errors, touchedFields, isSubmitted },
  } = useFormContext();

  const hasError = touchedFields[name] && errors[name] && isSubmitted;

  return (
    <fieldset className={classnames(hasError && 'has-error')}>
      {label && (
        <label htmlFor={name} className="form-label mb-0 w-full cursor-pointer">
          {label}
        </label>
      )}
      {children}
      <div className="form-help first-letter text-sm text-secondary">
        {hasError ? errors[name]?.message : help}
      </div>
    </fieldset>
  );
};

export default Fieldset;
