import { ReactNode } from 'react';
import { TypographyColors, TypographySizes } from '../../styles/theme';

export type TypographyProps = {
  children: ReactNode | ReactNode[] | string;
  color?: keyof TypographyColors;
  size?: keyof TypographySizes;
  weight?: number;
  as?: React.ElementType;
  [x: string]: any;
};

export type TypographyStyleProps = Pick<TypographyProps, 'color' | 'weight' | 'size'>;
