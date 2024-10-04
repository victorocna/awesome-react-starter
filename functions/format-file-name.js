const formatFileName = (files) => {
  if (Object.keys(files).length === 1) {
    return files[0].name;
  }
  let nameString = '';
  Object.values(files).forEach((item) => {
    nameString = nameString + ', ' + item.name;
  });
  return nameString.slice(2);
};

export default formatFileName;
