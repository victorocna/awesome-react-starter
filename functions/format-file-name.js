import { size } from 'lodash';

const formatFileName = (files) => {
  try {
    if (size(Object.keys(files)) === 1) {
      return files[0].name;
    }
    let nameString = '';
    Object.values(files).forEach((item) => {
      nameString = nameString + ', ' + item.name;
    });
    return nameString.slice(2);
  } catch (error) {
    console.error('Error formatting file names:', error);
    return 'N/A';
  }
};

export default formatFileName;
