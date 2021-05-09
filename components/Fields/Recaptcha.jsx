import React, { forwardRef } from 'react';
import ReCaptcha from 'react-google-recaptcha';

const Recaptcha = (props, ref) => {
  const sitekey = process.env.RECAPTCHA_SITE_KEY;
  if (!sitekey) {
    return null;
  }

  return <ReCaptcha ref={ref} sitekey={sitekey} size="invisible" />;
};

export default forwardRef(Recaptcha);
