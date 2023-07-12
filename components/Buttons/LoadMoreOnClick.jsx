import { Button } from '@components';

const LoadMoreOnClick = ({ fetchNextPage, hasNextPage, isFetchingNextPage }) => {
  if (!hasNextPage) {
    return null;
  }
  const handleClick = () => {
    if (typeof fetchNextPage === 'function') {
      fetchNextPage();
    }
  };

  return (
    <div className="my-4">
      <Button
        className="button full secondary text-xs"
        onClick={handleClick}
        disabled={isFetchingNextPage}
      >
        Load more
      </Button>
    </div>
  );
};

export default LoadMoreOnClick;
