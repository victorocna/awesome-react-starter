import { useMemo } from 'react';

const EmailMask = ({ value }) => {
  const at = value.indexOf('@');
  const dot = value.lastIndexOf('.');
  const makeMask = (email) => {
    return (
      email.substr(0, at + 1) +
      `<!--comm-->` +
      email.substr(at + 1, dot + 1 - at) +
      `<!--comm-->` +
      email.substr(dot + 2)
    );
  };

  const mask = useMemo(() => {
    return { __html: makeMask(value) };
  }, []);

  return <p dangerouslySetInnerHTML={mask}></p>;
};

export default EmailMask;
