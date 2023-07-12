import { useRef } from 'react';
import { Button } from '@components';
import { useIntersectionObserver } from '@hooks';

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
        className="button full secondary hover-transition text-xs"
        onClick={handleClick}
        disabled={isFetchingNextPage}
      >
        Load more
      </Button>
    </div>
  );
};

export default LoadMoreOnScroll;
