import { useContext } from 'react';
import { Logo } from '../../Logo';
import { Box } from '../../UI/Box';
import { Button } from '../../UI/Button';
import { Typography } from '../../UI/Typography';
import { MenuContext, MenuContextState } from './context';
import { MenuWrap, LogoWrap, SwitchMenuButton } from './styled';

const Menu = () => {
  const { isOpenMenu, closeMenu } = useContext<MenuContextState>(MenuContext);

  return (
    <MenuWrap isOpen={isOpenMenu}>
      <LogoWrap>
        <SwitchMenuButton onClick={closeMenu}>
          <img src="/assets/close_menu.svg" alt="hamburger_menu" />
        </SwitchMenuButton>
        <Logo />
      </LogoWrap>
      <Box>
        <Button fullWidth isLink href="/trip/new" justifyContent="space-between">
          <Typography color="carbon" size="sm" weight={600}>
            New Trip
          </Typography>
          <img src="/assets/plus.svg" alt="add_trip" />
        </Button>
      </Box>
    </MenuWrap>
  );
};

export { Menu };
