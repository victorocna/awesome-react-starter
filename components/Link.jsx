import NextLink from 'next/link';
import { isValidElement } from 'react';

const Link = ({ children, href, onClick, ...props }) => {
  // If the child is a plain <a> element, enable legacyBehavior so
  // older code that nests an <a> inside <Link> keeps working.
  const childIsAnchor = isValidElement(children) && children.type === 'a';

  // If href is exactly '#' and no onClick was provided, prevent default
  // navigation so anchor doesn't jump to top of page.
  const finalOnClick = href === '#' && !onClick ? (e) => e.preventDefault() : onClick;

  const linkProps = { href, onClick: finalOnClick, ...props };

  if (childIsAnchor) {
    return (
      // legacyBehavior makes Next.js accept <a> children and forward href
      <NextLink legacyBehavior {...linkProps}>
        {children}
      </NextLink>
    );
  }

  return <NextLink {...linkProps}>{children}</NextLink>;
};

export default Link;
