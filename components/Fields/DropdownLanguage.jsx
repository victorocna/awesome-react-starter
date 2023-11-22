import { NoSsr } from '@components';
import { languages, sitename } from '@site.config';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { local } from 'store2';
import DropdownWithImage from './DropdownWithImage';

const DropdownLanguage = () => {
  // Set default language to English
  if (!local.get(sitename)) {
    local.set(sitename, 'en');
  }

  const [language, setLanguage] = useState(local.get(sitename));
  const router = useRouter();

  const handleSelect = (value) => {
    local.set(sitename, value);
    setLanguage(value);
    router.reload();
  };

  const showLanguage = (lang) => (
    <option key={lang} value={lang}>
      <div className="flex w-full items-center gap-2">
        <img
          alt={lang}
          className="rounded-full"
          height="24px"
          src={`/flags/${lang}.png`}
          width="24px"
        />
        <span className="font-bold uppercase">{lang}</span>
      </div>
    </option>
  );

  return (
    <NoSsr>
      <div className="max-w-min" id="language-dd">
        <DropdownWithImage
          icon={<i className="fas fa-chevron-down mt-0.5" />}
          onSelect={handleSelect}
          value={language}
        >
          {languages.map(showLanguage)}
        </DropdownWithImage>
      </div>
    </NoSsr>
  );
};

export default DropdownLanguage;
