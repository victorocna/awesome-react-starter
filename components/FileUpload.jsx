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
      <div className="py-8 border-dashed border-2 border-gray-400 flex flex-col items-center gap-4">
        <div className="h-1 my-2">
          <p>{fileName}</p>
        </div>
        <div>
          <input ref={ref} className="hidden" type="file" accept={accept} onChange={handleUpload} />
          <h3 className="text-base md:text-xl font-semibold">{text}</h3>
        </div>
        <Button className="mt-2 button full secondary" onClick={handleClick}>
          <span>
            Selecteaza <i className="ml-2 far fa-file"></i>
          </span>
        </Button>
      </div>
    </div>
  );
};

export default FileUpload;
