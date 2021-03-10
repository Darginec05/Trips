import { ReactNode } from 'react';

export type TypographyProps = {
  children: ReactNode | ReactNode[] | string;
  color?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | number;
  weight?: number;
  as?: React.ElementType;
};

export type TypographyStyleProps = Omit<TypographyProps, 'children' | 'component'>;
