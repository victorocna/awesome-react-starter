import NextLink from 'next/link';

const Link = ({ href, as, children, ...props }) => {
  return (
    <NextLink href={href} as={as}>
      <a className="underline text-blue-800" {...props}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
