import NextLink from 'next/link';

const Link = ({ children, ...props }) => {
  return <NextLink {...props}>{children}</NextLink>;
};

export default Link;
