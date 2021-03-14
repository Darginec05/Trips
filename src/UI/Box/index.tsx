import { BoxUI } from './styled';
import { BoxProps } from './types';

const Box = ({
  children,
  justifyContent,
  flexDirection,
  alignItems,
  fullWidth = false,
  p = 0,
  m = 0,
  ...rest
}: BoxProps) => {
  return (
    <BoxUI
      p={p}
      m={m}
      justifyContent={justifyContent}
      fullWidth={fullWidth}
      alignItems={alignItems}
      flexDirection={flexDirection}
      {...rest}
    >
      {children}
    </BoxUI>
  );
};

export { Box };
