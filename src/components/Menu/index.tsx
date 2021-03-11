import { Logo } from '../../Logo';
import { Box } from '../Box';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { MenuWrap } from './styled';

const Menu = () => {
  return (
    <MenuWrap>
      <Logo />
      <Box mt={40}>
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
