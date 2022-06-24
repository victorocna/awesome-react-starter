import { useFormikContext } from 'formik';
import { classnames } from '../../lib';
import { get } from 'lodash';

const Fieldset = ({ label, help, name, children }) => {
  const { submitCount, touched, errors } = useFormikContext();
  const hasError = get(touched, name) && get(errors, name) && submitCount > 0;

  return (
    <fieldset className={classnames(hasError && 'has-error')}>
      {label && (
        <label htmlFor={name} className="form-label w-full cursor-pointer mb-0">
          {label}
        </label>
      )}
      {children}
      <div className="form-help text-sm text-secondary first-letter">
      {hasError ? get(errors, name) : help}
      </div>
    </fieldset>
  );
};

export default Fieldset;
