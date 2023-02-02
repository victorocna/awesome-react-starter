import { useEffect, useRef, useState } from 'react';
import { Button } from '.';
import { getFileName } from '../functions';

const FileUpload = ({ accept, file, setFile, ...props }) => {
  const [fileName, setFileName] = useState('');
  const ref = useRef();

  useEffect(() => {
    if (!file) {
      return setFileName('');
    }
  }, [file]);

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event?.target?.files ?? null;
    setFileName(getFileName(file));
    setFile(file);
  };

  const handleClick = (event) => {
    event.preventDefault();
    ref.current.click();
  };

  return (
    <div className="flex border rounded-md">
      <Button
        className="button full secondary h-fit"
        onClick={handleClick}
        disabled={props.disabled ? 'disabled' : ''}
      >
        <span className="flex gap-2">
          Selecteaza <i className="my-auto far fa-file"></i>
        </span>
      </Button>
      <input
        ref={ref}
        className="hidden"
        type="file"
        accept={accept}
        onChange={handleUpload}
        {...props}
      />
      <h4 className="mt-2 ml-2 truncate">{fileName}</h4>
    </div>
  );
};

export default FileUpload;
