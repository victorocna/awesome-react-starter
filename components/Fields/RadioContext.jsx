import { createContext } from 'react';

export default createContext({
  name: '',
  selectedValue: '',
  onChange: () => {},
});
