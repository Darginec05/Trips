import { ContainerUI } from './styled';
import { Menu } from '../Menu';
import { ContainerProps } from './types';
import { RightContent } from '../RightContent';

const Container = ({ children, direction }: ContainerProps) => {
  return (
    <ContainerUI direction={direction}>
      <Menu />
      {children}
      <RightContent />
    </ContainerUI>
  );
};

export { Container };
