import axios from 'axios';
import { useEffect, useState } from 'react';
import { FileUpload } from '../../components';
import { Submit } from '../../components/Fields';
import { Layout } from '../../examples/components';
import { formatFileName } from '../../functions';
import { useMutation } from '../../hooks';
import { toaster } from '../../lib';

const Page = () => {
  const [file, setFile] = useState();
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const sendFile = () => {
    axios.get(`https://dog.ceo/api/breeds/image/random`);
  };

  const mutation = useMutation(sendFile, {
    onSuccess: () => {
      toaster.success('Fisierul a fost trimis cu succes!');
      setLoading(false);
      setFile('');
    },
  });

  useEffect(() => {
    setDisabled(!file);
  }, [file]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    mutation.mutateAsync();
  };

  return (
    <Layout title="File upload">
      <div className="prose-sm">
        <h3 className="mt-0">Main example</h3>
        <div className="w-1/2">
          <p>Default file input example</p>
          <FileUpload setFile={setFile} file={file} />

          <div className="prose-sm">
            <h3>Other examples</h3>
            <div className="w-1/2">
              <p className="mb-1">File input upload (accepts only PDF files)</p>
              <FileUpload accept=".pdf" setFile={setFile} file={file} />
            </div>

            <div className="w-1/2">
              <p className="mb-1">Multiple file input upload</p>
              <FileUpload multiple setFile={setFile} file={file} />
            </div>

            <div className="w-1/2">
              <p className="mb-1">Disabled file input upload</p>
              <FileUpload disabled setFile={setFile} file={file} />
            </div>
          </div>
          <p className="mb-2">
            <span>Filename outside component (demonstrates useState in react): </span>
            {file && <strong>{formatFileName(file)}</strong>}
          </p>
        </div>
        <div className="flex">
          <Submit
            className="mt-2 button full secondary"
            disabled={disabled}
            onClick={handleSubmit}
            isLoading={isLoading}
          >
            Submit
          </Submit>
        </div>
      </div>
    </Layout>
  );
};

export default Page;
