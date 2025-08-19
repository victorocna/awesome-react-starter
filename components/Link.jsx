import NextLink from 'next/link';
import React from 'react';

const Link = ({ children, ...props }) => {
  // If the child is a plain <a> element, enable legacyBehavior so
  // older code that nests an <a> inside <Link> keeps working.
  const childIsAnchor = React.isValidElement(children) && children.type === 'a';

  if (childIsAnchor) {
    return (
      // legacyBehavior makes Next.js accept <a> children and forward href
      <NextLink legacyBehavior {...props}>
        {children}
      </NextLink>
    );
  }

  return <NextLink {...props}>{children}</NextLink>;
};

export default Link;
