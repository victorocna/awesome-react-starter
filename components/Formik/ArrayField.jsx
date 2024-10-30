import { falsy } from '@functions';
import { FieldArray, useField, useFormikContext } from 'formik';
import { isString } from 'lodash';

const ArrayField = ({ AddComponent, SectionComponent, name, emptyRow = {} }) => {
  const [field] = useField(name);
  const { errors, touched, submitCount } = useFormikContext();

  // Check if the field has an error
  const hasNoError = touched[name] && errors[name] && submitCount > 0 && isString(errors[name]);

  // Check if the required components are passed
  if (falsy(name, AddComponent, SectionComponent)) {
    return (
      <p className="text-red-500">
        Required attributes are missing. ArrayField cannot be displayed.
      </p>
    );
  }

  const showSections = ({ remove, push }) => (
    <div className="flex flex-col gap-4">
      <AddComponent push={push} emptyRow={emptyRow} error={hasNoError && errors[name]} />
      <SectionComponent
        name={name}
        remove={remove}
        push={push}
        sections={field.value}
        emptyRow={emptyRow}
      />
    </div>
  );

  return <FieldArray name={name} render={showSections} />;
};

export default ArrayField;
