import { ReactNode } from 'react';

export type ContainerProps = {
  children: ReactNode;
  direction?: 'column' | 'row';
  leftContent?: ReactNode;
  rightContent?: ReactNode;
};

export type ContainerStyleProps = Pick<ContainerProps, 'direction'>;
