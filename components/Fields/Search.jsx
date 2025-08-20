import { classnames } from '@lib';
import { debounce, isFunction } from 'lodash';
import { useEffect, useRef, useState } from 'react';

const Search = ({ extraClass, minChars = 3, onChange, placeholder, value = '' }) => {
  const ref = useRef(null);
  const debRef = useRef(null);
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value ?? '');
  }, [value]);

  useEffect(() => {
    debRef.current?.cancel?.();
    debRef.current = debounce((val) => {
      if (!isFunction(onChange)) {
        return;
      }
      if (val === '' || (typeof val === 'string' && val.length >= minChars)) {
        onChange(val);
      }
    }, 500);
    return () => {
      debRef.current?.cancel?.();
    };
  }, [onChange, minChars]);

  const handleChange = (event) => {
    const next = event.target.value;
    setText(next);
    debRef.current?.(next);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') {
      ref.current?.blur?.();
    }
  };

  const resetInputValue = () => {
    setText('');
    debRef.current?.cancel?.();
    if (isFunction(onChange)) {
      onChange('');
    }
    ref.current?.focus?.();
  };

  return (
    <div className={classnames('relative flex items-center', extraClass)}>
      <input
        className="input pl-8"
        value={text}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        placeholder={placeholder}
        ref={ref}
        type="text"
      />
      <div className="absolute left-2 px-1">
        <i className="fas fa-search text-gray-500"></i>
      </div>
      {text !== '' && (
        <button
          className="absolute right-0 top-0 z-30 h-full px-3 py-2 text-gray-500 outline-none"
          onClick={resetInputValue}
          tabIndex={-1}
          type="button"
        >
          <i className="fas fa-times"></i>
        </button>
      )}
    </div>
  );
};

export default Search;
