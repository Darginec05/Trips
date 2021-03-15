import Link from 'next/link';
import { useContext } from 'react';
import { Logo } from '../Logo';
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
      <Box mb={32}>
        <Button fullWidth isLink href="/trip/new" justifyContent="space-between">
          <Typography color="carbon" size="sm" weight={600}>
            New Trip
          </Typography>
          <img src="/assets/plus.svg" alt="add_trip" />
        </Button>
      </Box>
      <div>
        <Box alignItems="center" mb={25}>
          <img src="/assets/menu_your_trips.svg" alt="menu_your_trips" style={{ marginRight: 10 }} />
          <Link href="/">
            <Typography as="a" weight={600} size="md" color="primary">
              Your trips
            </Typography>
          </Link>
        </Box>
        <Box alignItems="center" mb={25}>
          <img src="/assets/menu_future_feature.svg" alt="menu_future_feature" style={{ marginRight: 10 }} />
          <Typography weight={400} size="md" color="gray">
            Future feature
          </Typography>
        </Box>
        <Box alignItems="center">
          <img src="/assets/menu_future_section.svg" alt="menu_future_section" style={{ marginRight: 10 }} />
          <Typography weight={400} size="md" color="gray">
            Future section
          </Typography>
        </Box>
      </div>
    </MenuWrap>
  );
};

export { Menu };
