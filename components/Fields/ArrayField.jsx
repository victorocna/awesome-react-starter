import { FieldArray, useField } from 'formik';

const ArrayField = ({ AddComponent, SectionComponent, name, emptyRow = {} }) => {
  const [field] = useField(name);

  if (!name || !AddComponent || !SectionComponent) {
    return (
      <p className="text-red-500">
        Required attributes are missing. ArrayField cannot be displayed.
      </p>
    );
  }

  const showSections = ({ remove, push }) => (
    <div className="flex flex-col gap-4">
      <AddComponent push={push} emptyRow={emptyRow} />
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
