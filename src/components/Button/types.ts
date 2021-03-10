import { ReactNode } from 'react';

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: any;
  icon?: null | ReactNode;
  padding?: number | string;
  bgColor?: 'coolgray' | 'primary' | 'red';
  justifyContent?: string;
  fullWidth?: boolean;
  as?: 'link' | 'button';
  href?: string;
  onClick?: () => void;
};

export type ButtonStyleProps = Pick<ButtonProps, 'padding' | 'justifyContent' | 'fullWidth' | 'bgColor'>;