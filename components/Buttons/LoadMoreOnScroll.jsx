import { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks';
import { Button } from '..';

const LoadMoreOnScroll = ({ fetchNextPage, hasNextPage, isFetchingNextPage }) => {
  const ref = useRef(null);
  useIntersectionObserver({
    target: ref,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  if (!hasNextPage) {
    return null;
  }
  const handleClick = () => {
    if (typeof fetchNextPage === 'function') {
      fetchNextPage();
    }
  };

  return (
    <div className="py-4" ref={ref}>
      <Button
        className="button full secondary text-xs hover-transition"
        onClick={handleClick}
        disabled={isFetchingNextPage}
      >
        Load more
      </Button>
    </div>
  );
};

export default LoadMoreOnScroll;
