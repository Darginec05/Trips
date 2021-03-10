import { ContainerUI } from './styled';
import { MainContent } from '../MainContent';
import { Menu } from '../Menu';
import { ContainerProps } from './types';

const Container = ({
  children,
  title,
  leftContent = <Menu />,
  rightContent,
  direction,
}: ContainerProps) => {
  return (
    <ContainerUI direction={direction}>
      {leftContent}
      <MainContent title={title}>{children}</MainContent>
      {rightContent}
    </ContainerUI>
  );
};

export { Container };
