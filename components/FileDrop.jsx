import { Button } from '@components';
import { formatFileName } from '@functions';
import { useRef, useState } from 'react';

const FileDrop = ({ accept, setFile, disabled, disableDrop = false, multiple = true }) => {
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
    <div className="flex flex-col border rounded-md">
      <div
        className="border-dashed border-2 border-gray-300 rounded-lg p-4 text-center w-full"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p className="text-gray-600">{fileName || 'Drag and drop files here or click to select'}</p>

        <div className="mt-4">
          <Button
            className="button full secondary rounded-r-none h-fit"
            onClick={handleClick}
            disabled={disabled}
          >
            <span>Select</span>
          </Button>
        </div>
      </div>

      {/* Hidden file input */}
      <input
        ref={ref}
        className="hidden"
        type="file"
        accept={accept}
        onChange={handleFileSelect}
        multiple={multiple}
      />
    </div>
  );
};

export default FileDrop;
