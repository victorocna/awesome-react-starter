import { useRef, useState } from 'react';
import { Button } from '.';
import { formatFileName } from '../functions';

const FileUpload = ({ accept, file, setFile, disabled, ...props }) => {
  const [fileName, setFileName] = useState('');
  const ref = useRef();

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event.target.files || null;
    setFileName(formatFileName(file));
    setFile(file);
  };

  const handleClick = (event) => {
    event.preventDefault();
    ref.current.click();
  };

  return (
    <div className="flex border rounded-md">
      <Button
        className="button full secondary rounded-r-none h-fit"
        onClick={handleClick}
        disabled={disabled}
      >
        <span>Select</span>
      </Button>
      <input
        ref={ref}
        className="hidden"
        type="file"
        accept={accept}
        onChange={handleUpload}
        {...props}
      />
      <p className="m-0 truncate px-2 py-1">{fileName}</p>
    </div>
  );
};

export default FileUpload;
