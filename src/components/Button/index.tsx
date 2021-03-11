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
  fullWidth = false,
  href = '/',
  type = 'button',
  bgColor = 'primary',
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
    >
      {children}
    </ButtonUI>
  );
};

export { Button };
