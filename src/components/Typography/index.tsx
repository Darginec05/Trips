import { TypographyUI } from './styled';
import { TypographyProps } from './types';

/**
 *
 * @param {size} - xs {12}, sm {14}, md {16}, lg {24}
 * @returns
 */
const Typography = ({
  children,
  color = 'primary',
  size = 'md',
  weight = 400,
  ...rest
}: TypographyProps) => {
  return (
    <TypographyUI color={color} weight={weight} size={size} {...rest}>
      {children}
    </TypographyUI>
  );
};

export { Typography };
