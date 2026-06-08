import { sitename } from '@site.config';
import store2 from 'store2';
import * as languages from '../languages';

const { local } = store2;

const translate = (text: string): string => {
  // Default language is set to 'ro' (Romanian). Change to 'en' if English is preferred.
  const language = local.get(sitename) || 'ro';

  if (Object.keys(languages).includes(language)) {
    return (languages as Record<string, Record<string, string>>)[language][text] || text;
  }

  return text;
};

export default translate;
