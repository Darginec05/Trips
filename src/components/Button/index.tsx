import Link from 'next/link';
import { ButtonUI } from './styled';
import { ButtonProps } from './types';

const Button = ({
  children,
  onClick,
  padding,
  justifyContent,
  fullWidth = false,
  href = '/',
  type = 'button',
  bgColor = 'primary',
  as = 'button',
}: ButtonProps) => {
  if (as === 'link') {
    return (
      <Link href={href}>
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
