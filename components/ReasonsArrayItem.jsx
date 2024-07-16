import { Button } from '@components';
import { Input } from '@components/Fields';
import { Fieldset } from '@components/Formik';
import { Field } from 'formik';

const ReasonsArrayItem = ({ name, remove, push, sections, emptyRow }) => {
  const showSections = (section, index) => {
    return (
      <div className="sections sections-border" key={`${section}-${index}`}>
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-semibold flex-1">
            <span>
              <span>Secțiunea</span> {index + 1}:
            </span>
          </h3>
          <Button
            className="button mini primary text-xs font-medium"
            onClick={() => {
              push(emptyRow);
            }}
          >
            Adaugă secțiune
          </Button>
          <Button className="button mini accent text-xs font-medium" onClick={() => remove(index)}>
            Șterge
          </Button>
        </div>

        <div>
          <Fieldset name={`${name}.${index}.reason.`} label="Reason">
            <Field id={`${name}.${index}.reason`} name={`${name}.${index}.reason`} as={Input} />
          </Fieldset>
        </div>
      </div>
    );
  };

  return sections.map(showSections);
};

export default ReasonsArrayItem;
