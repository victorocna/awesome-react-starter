import { useFormikContext } from 'formik';
import { useRef } from 'react';
import { Fieldset } from '.';
import { Button, Overflow } from '@components';
import { removeDiacritics } from '@functions';

const FileUpload = ({
  setFile,
  label = 'File upload',
  placeholder = 'Upload file',
  fieldValue = 'document.fileName',
  icon = 'mr-2 fas fa-cloud-upload-alt',
  buttonClasses = 'button full',
  ...props
}) => {
  const ref = useRef();
  const { values, setFieldValue } = useFormikContext();

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event?.target?.files?.[0] ?? null;
    // Fixes unwanted document.fileName updates
    // in case the user clicks on input but then cancels the selection of a file
    if (!file) {
      return;
    }

    setFieldValue(fieldValue, removeDiacritics(event?.target?.files?.[0]?.name) ?? '');
    setFile(file);
  };

  const handleClick = (event) => {
    event.preventDefault();
    ref.current.click();
  };

  return (
    <Fieldset name={fieldValue} label={label}>
      <input
        ref={ref}
        name={fieldValue}
        className="hidden"
        type="file"
        onChange={handleUpload}
        {...props}
      />
      <Button onClick={handleClick} className={buttonClasses}>
        <Overflow>
          <div>
            <i className={icon} />
            <span>{values[fieldValue] || placeholder}</span>
          </div>
        </Overflow>
      </Button>
    </Fieldset>
  );
};

export default FileUpload;
