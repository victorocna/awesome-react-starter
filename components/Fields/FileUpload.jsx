import { Button } from '@components';
import { formatFileName } from '@functions';
import { useRef, useState } from 'react';

const FileUpload = ({ accept, setFile, disabled, disableDrop = false, multiple = true }) => {
  const [fileName, setFileName] = useState('');
  const ref = useRef();

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files || null;
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(formatFileName(selectedFile));
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
    ref.current.click();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    if (disableDrop || disabled) {
      return;
    }

    // Handle dropped files
    const droppedFiles = event.dataTransfer.files;
    if (droppedFiles) {
      setFile(droppedFiles);
      setFileName(formatFileName(droppedFiles));
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex border rounded-md" onDrop={handleDrop} onDragOver={handleDragOver}>
      <Button
        className="button full secondary rounded-r-none h-fit"
        onClick={handleClick}
        disabled={disabled}
      >
        <span>Select</span>
      </Button>

      {/* Hidden file input */}
      <input
        ref={ref}
        className="hidden"
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        multiple={multiple}
      />
      <p className="m-0 truncate px-2 py-1">{fileName}</p>
    </div>
  );
};

export default FileUpload;
