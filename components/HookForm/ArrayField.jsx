import { falsy } from '@functions';
import { useRerender } from '@hooks';
import { isString } from 'lodash';
import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const ArrayField = ({ AddComponent, SectionComponent, name, emptyRow = {} }) => {
  const { formState, watch } = useFormContext();
  const { errors, submitCount, touchedFields: touched } = formState;
  const fieldValues = watch(name);

  // Rerender SectionComponent when fieldValues change
  const [key, rerender] = useRerender();
  useEffect(() => {
    rerender();
  }, [fieldValues, rerender]);

  // Check if the field has an error
  const hasError = touched[name] && errors[name] && submitCount > 0 && isString(errors[name]);

  // Check if the required components are passed
  if (falsy(name, AddComponent, SectionComponent)) {
    return (
      <p className="text-red-500">
        Required attributes are missing. ArrayField cannot be displayed.
      </p>
    );
  }

  const showSections = () => (
    <div className="flex flex-col gap-4">
      <AddComponent name={name} emptyRow={emptyRow} />
      {hasError && (
        <div>
          <p className="h-5 text-sm text-red-500">{errors[name]}</p>
        </div>
      )}
      <SectionComponent key={key} name={name} emptyRow={emptyRow} sections={fieldValues} />
    </div>
  );

  return <div>{showSections()}</div>;
};

export default ArrayField;
