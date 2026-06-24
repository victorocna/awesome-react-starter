import { Button } from '@components/ui/button';

const Submit = ({ children, isLoading, ...props }) => {
  return (
    <div className="flex items-center">
      <Button type="submit" disabled={isLoading} {...props}>
        {children}
      </Button>
      {isLoading && <img src="/icons/loading.gif" alt="loading" className="mx-1 w-6" />}
    </div>
  );
};

export default Submit;
