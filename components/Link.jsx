import NextLink from 'next/link';

const Link = ({ href, as, children, ...props }) => (
  <div {...props}>
    <NextLink href={href} as={as}>
      {children}
    </NextLink>
  </div>
);

export default Link;
