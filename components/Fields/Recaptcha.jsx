import ReCaptcha from 'react-google-recaptcha';

const Recaptcha = ({ ref, ...props }) => {
  const sitekey = process.env.RECAPTCHA_SITE_KEY;
  if (!sitekey) {
    return null;
  }

  return <ReCaptcha ref={ref} sitekey={sitekey} size="invisible" {...props} />;
};

export default Recaptcha;
