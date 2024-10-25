import { withAuth } from '@auth';
import { FileDrop, FileUpload } from '@components/Fields';
import { Submit } from '@components/Fields';
import { Layout } from '@examples/components';
import { formatFileName } from '@functions';
import { useMutation } from '@hooks';
import { toaster } from '@lib';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Page = () => {
  const [file, setFile] = useState();
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setLoading] = useState(false);

  const sendFile = () => {
    // This is a random API call which always returns a 200 status code
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
        <h3 className="mt-0">Main examples</h3>
        <div className="w-1/2">
          <p>Default file input example (with drop enabled)</p>
          <FileUpload setFile={setFile} file={file} />

          <p>File drop (with drop enabled)</p>
          <FileDrop setFile={setFile} file={file} />

          <div className="prose-sm">
            <h3>Other examples</h3>

            <p>Default file input example (without drop)</p>
            <FileUpload setFile={setFile} file={file} disableDrop />
            <div>
              <p className="mb-1">File drop (without drop)</p>
              <FileDrop file={file} setFile={setFile} disableDrop />
            </div>

            <div className="w-1/2">
              <p className="mb-1">File input upload (accepts only PDF files)</p>
              <FileUpload accept=".pdf" setFile={setFile} file={file} />
            </div>

            <div>
              <p className="mb-1">Disabled file drop</p>
              <FileDrop file={file} setFile={setFile} disabled />
            </div>

            <div className="w-1/2">
              <p className="mb-1">Multiple file input upload</p>
              <FileUpload setFile={setFile} file={file} multiple={true} />
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

export async function getStaticProps() {
  // hide page on production environments
  if (process.env.NODE_ENV === 'production') {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
}

export default withAuth(Page);
