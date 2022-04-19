import { useFormikContext } from 'formik';
import { classnames } from '../../lib';

const Fieldset = ({ label, help, name, children }) => {
  const { submitCount, touched, errors } = useFormikContext();
  const hasError = touched[name] && errors[name] && submitCount > 0;

  return (
    <fieldset className={classnames(hasError && 'has-error')}>
      {label && (
        <label htmlFor={name} className="form-label w-full cursor-pointer mb-0">
          {label}
        </label>
      )}
      {children}
      <div className="form-help text-sm text-secondary first-letter">
        {hasError ? errors[name] : help}
      </div>
    </fieldset>
  );
};

export default Fieldset;
