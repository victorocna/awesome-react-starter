import { useEffect, useRef, useState } from 'react';
import { Button } from '.';

const FileUpload = ({ text, accept = '.jpg, .jpeg, .png', setFile, file }) => {
  const [fileName, setFileName] = useState('');
  const ref = useRef();

  useEffect(() => {
    if (!file) {
      return setFileName('');
    }
  }, [file]);

  const handleUpload = (event) => {
    event.preventDefault();
    const file = event?.target?.files?.[0] ?? null;
    setFileName(event?.target?.files?.[0]?.name ?? '');
    setFile(file);
  };

  const handleClick = (event) => {
    event.preventDefault();
    ref.current.click();
  };

  return (
    <div>
      <div className="py-8 border border-solid border-gray-300 flex flex-col items-center gap-4">
        <div className="flex flex-col">
          <h3 className="text-base md:text-lg mb-2 text-gray-700">{text}</h3>
          <div className="flex border rounded-md w-96">
            <Button className="button full secondary h-fit" onClick={handleClick}>
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
            />
            <h4 className="mt-2 ml-2 truncate">{fileName}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
