import { ReactNode, useContext } from 'react';
import { Box } from '../../UI/Box';
import { MenuContext, MenuContextState } from '../Menu/context';
import { MainContentUI, Title, OpenMenu, TitleWrap } from './styled';

type Props = {
  children: ReactNode;
  title: string;
};

const MainContent = ({ children, title }: Props) => {
  const { openMenu } = useContext<MenuContextState>(MenuContext);

  return (
    <MainContentUI>
      <TitleWrap>
        <OpenMenu onClick={openMenu}>
          <img src="/assets/hamburger_menu.svg" alt="hamburger_menu" />
        </OpenMenu>
        <Title size="lg">{title}</Title>
      </TitleWrap>
      <Box pt={32} pb={32} fullWidth flexDirection="column" justifyContent="center">
        {children}
      </Box>
    </MainContentUI>
  );
};

export { MainContent };
