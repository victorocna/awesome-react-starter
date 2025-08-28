import { useRef } from 'react';

function useRenderCount() {
  const renderCount = useRef(0);
  renderCount.current += 1;

  return renderCount.current;
}

export default useRenderCount;
