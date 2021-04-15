import { startsWith } from 'lodash';

const Button = ({ href, children, ...props }) => {
  if (href) {
    if (startsWith(href, 'http')) {
      props.target = '_blank';
    }
    return (
      <a role="button" href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
};

export default Button;
