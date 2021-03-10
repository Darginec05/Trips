import { Logo } from '../../Logo';
import { Box } from '../Box';
import { Button } from '../Button';
import { MenuWrap } from './styled';

const Menu = () => {
  return (
    <MenuWrap>
      <Logo />
      <Box mt={40}>
        <Button fullWidth as="link" href="/trip/new">
          sadasd
        </Button>
      </Box>
    </MenuWrap>
  );
};

export { Menu };
