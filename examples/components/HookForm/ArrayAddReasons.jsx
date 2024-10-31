import { Button } from '@components';
import { useFieldArray, useFormContext } from 'react-hook-form';

const ArrayAddReasons = ({ name, emptyRow }) => {
  const { control } = useFormContext();
  const { insert } = useFieldArray({ control, name });

  return (
    <div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <h4 className="text-lg font-medium">Reasons</h4>
          <Button
            className="button mini primary text-xs font-medium"
            onClick={() => insert(0, emptyRow || {})}
          >
            Add reason
          </Button>
        </div>
        <p className="text-gray-600">
          This section allows you to add reasons why you like coding. Be creative!
        </p>
      </div>
    </div>
  );
};

export default ArrayAddReasons;
