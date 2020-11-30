import { useEffect, useRef } from 'react';

const Input = (props) => {
  const ref = useRef(null);
  const { autoFocus } = props;
  useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [ref]);

  return <input ref={ref} className="form-input w-full" {...props} />;
};

export default Input;
