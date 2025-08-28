import { sitename } from '@site.config';
import { local } from 'store2';
import * as languages from '../languages';

const translate = (text) => {
  // Default language is set to 'ro' (Romanian). Change to 'en' if English is preferred.
  const language = local.get(sitename) || 'ro';

  if (Object.keys(languages).includes(language)) {
    return languages[language][text] || text;
  }

  return text;
};

export default translate;
