import { useState } from 'react';
import { classnames } from '../lib';

const ShowMore = ({ children, label = 'Show more', visible = false }) => {
  const [show, setShow] = useState(visible);
  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button
        type="button"
        className="flex items-center gap-1 text-primary"
        onClick={handleClick}
      >
        <span>{label}</span>
        <i className={classnames(show ? 'fas fa-chevron-up' : 'fas fa-chevron-down')} />
      </button>
      {show && <div>{children}</div>}
    </div>
  );
};

export default ShowMore;
