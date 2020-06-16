import NextLink from 'next/link';

const Link = ({ href, as, children, props }) => (
  <div>
    <NextLink href={href} as={as} {...props}>
      {children}
    </NextLink>
  </div>
);

export default Link;
