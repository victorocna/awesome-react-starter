import { Button } from '..';

const Submit = ({ children, isLoading, ...props }) => {
  return (
    <div className="flex items-center">
      <Button type="submit" className="button full primary" disabled={isLoading} {...props}>
        {children}
      </Button>
      {isLoading && <img src="/icons/loading.gif" alt="loading" className="mx-1 w-6" />}
    </div>
  );
};

export default Submit;
