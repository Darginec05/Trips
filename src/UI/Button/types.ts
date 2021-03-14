import { ReactNode } from 'react';
import { ButtonBgColors } from '../../styles/theme';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: any;
  icon?: null | ReactNode;
  padding?: string;
  bgColor?: keyof ButtonBgColors;
  justifyContent?: string;
  fullWidth?: boolean;
  isLink?: boolean;
  href?: string;
  asLinkHref?: string;
  onClick?: () => void;
  disabled?: boolean;
  [x: string]: any;
};

export type ButtonStyleProps = Pick<ButtonProps, 'padding' | 'justifyContent' | 'fullWidth' | 'bgColor'>;
