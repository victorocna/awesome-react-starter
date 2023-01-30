import axios from 'axios';
import { useEffect, useState } from 'react';
import { Button, FileUpload, Loading } from '../../components';
import { Layout } from '../../examples/components';
import { useMutation } from '../../hooks';
import { toaster } from '../../lib';

const Page = () => {
  const [file, setFile] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  const sendFile = () => {
    const allData = new FormData();
    allData.append('file', file);
    axios.post((req, res) => {
      return res.status(200);
    }, allData);
  };

  const mutation = useMutation(sendFile, {
    onSuccess: () => {
      toaster.success('Fisierul a fost trimis cu succes!');
      setLoading(false);
      setFile('');
    },
  });

  useEffect(() => {
    if (file) {
      return setDisabled(false);
    }
    return setDisabled(true);
  }, [file]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    mutation.mutateAsync();
  };

  return (
    <Layout title="File upload">
      {loading && <Loading />}
      <FileUpload text="Incarca fisier" setFile={setFile} file={file} />
      <div className="flex">
        <Button className="mt-2 button full secondary" disabled={disabled} onClick={handleSubmit}>
          Salveaza
        </Button>
        <p className="mt-3.5 ml-2">Numele fisierului: {file?.name}</p>
      </div>
      <p>Fisierul este trimis catre un endpoint in API.</p>
    </Layout>
  );
};

export default Page;
