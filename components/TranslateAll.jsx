import { translate } from '@functions';
import { useObserver } from '@hooks';

const TranslateAll = () => {
  // Translate all text of the given node recursively
  const translateAll = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const translatedText = translate(node.textContent);
      node.textContent = translatedText;
    } else if (node.childNodes && node.childNodes.length > 0) {
      for (let i = 0; i < node.childNodes.length; i++) {
        translateAll(node.childNodes[i]);
      }
    }
  };

  // The only way to get the reference to the body element without server-side rendering
  const body = document.getElementsByTagName('body')[0];
  useObserver(body, () => translateAll(body));

  return null;
};

export default TranslateAll;
