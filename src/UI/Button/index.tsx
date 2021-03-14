import Link from 'next/link';
import { ButtonUI } from './styled';
import { ButtonProps } from './types';

const Button = ({
  children,
  onClick,
  padding,
  justifyContent,
  isLink,
  asLinkHref,
  disabled,
  fullWidth = false,
  href = '/',
  type = 'button',
  bgColor = 'primary',
  ...rest
}: ButtonProps) => {
  if (isLink) {
    return (
      <Link href={href} as={asLinkHref}>
        <ButtonUI
          as="a"
          onClick={onClick}
          bgColor={bgColor}
          justifyContent={justifyContent}
          padding={padding}
          fullWidth={fullWidth}
          {...rest}
        >
          {children}
        </ButtonUI>
      </Link>
    );
  }

  return (
    <ButtonUI
      type={type}
      onClick={onClick}
      bgColor={bgColor}
      justifyContent={justifyContent}
      padding={padding}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </ButtonUI>
  );
};

export { Button };
