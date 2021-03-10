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
        <Button fullWidth as="link" href="/trip/new">
          <Typography color="carbon" size="sm" weight={600}>
            New Trip
          </Typography>
        </Button>
      </Box>
    </MenuWrap>
  );
};

export { Menu };
