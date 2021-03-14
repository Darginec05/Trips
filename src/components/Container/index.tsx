import { useState } from 'react';
import { ContainerUI } from './styled';
import { Menu } from '../Menu';
import { ContainerProps } from './types';
import { RightContent } from '../RightContent';

const Container = ({ children, direction }: ContainerProps) => {
  const [isMenuOpen, setOpenMenu] = useState(true);

  return (
    <ContainerUI direction={direction}>
      <Menu isOpen={isMenuOpen} onCloseMenu={() => setOpenMenu(false)} />
      {children}
      <RightContent />
    </ContainerUI>
  );
};

export { Container };
