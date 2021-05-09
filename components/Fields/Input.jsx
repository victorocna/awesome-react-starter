import { useEffect, useRef } from 'react';

const Input = ({ autoFocus, ...props }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (autoFocus) {
      ref.current.focus();
    }
  }, [ref]);

  return <input ref={ref} className="form-input w-full rounded" {...props} />;
};

export default Input;
