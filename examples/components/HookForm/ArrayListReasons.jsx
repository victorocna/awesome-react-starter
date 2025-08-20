import { Button } from '@components';
import { Input } from '@components/Fields';
import { Field } from '@components/HookForm';
import { useFieldArray, useFormContext } from 'react-hook-form';

const ArrayListReasons = ({ name, emptyRow, sections }) => {
  const { control } = useFormContext();
  const { insert, remove } = useFieldArray({ control, name });

  const showSections = (section, index) => {
    return (
      <div className="sections sections-border" key={`${section}-${index}`}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="flex-1 font-semibold">
            <span>
              <span>Section</span> {index + 1}:
            </span>
          </h3>
          <Button
            className="button mini primary text-xs font-medium"
            onClick={() => insert(index + 1, emptyRow || {})}
          >
            Add reason
          </Button>
          <Button className="button mini accent text-xs font-medium" onClick={() => remove(index)}>
            Remove
          </Button>
        </div>

        <Field as={Input} label="Reason" name={`${name}.${index}.reason`} />
      </div>
    );
  };

  return sections.map(showSections);
};

export default ArrayListReasons;
