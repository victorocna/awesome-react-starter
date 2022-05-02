import fileDownload from 'js-file-download';

export const isStream = (headers) => {
  return headers['content-type'].split(';').shift() === 'application/octet-stream';
};

export const filename = (headers) => {
  return decodeURIComponent(headers['content-disposition'].split('=').pop());
};

export const handle = async (Axios, url, data) => {
  const res = await Axios({
    url,
    data: data || {},
    method: 'POST',
    responseType: 'blob', // important option for download
  });

  return fileDownload(res.data, filename(res.headers));
};

const download = {
  isStream,
  filename,
  handle,
};

export default download;
