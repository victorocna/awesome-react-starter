import { local } from 'store2';
import * as languages from '../languages';
import { sitename } from '../site.config';

const translate = (text) => {
  const language = local.get(sitename) || 'en';

  if (Object.keys(languages).includes(language)) {
    return languages[language][text] || text;
  }

  return text;
};

export default translate;
