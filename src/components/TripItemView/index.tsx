import { Box } from '../Box';
import { Button } from '../Button';
import { Item } from './styled';

const TripItemView = () => {
  return (
    <Item mb={20} p={20} fullWidth flexDirection="row">
      <Box ml="auto">
        <Button padding="18px 16px">icon</Button>
        <Button padding="18px 16px" bgColor="red">
          icon 2
        </Button>
      </Box>
    </Item>
  );
};

export { TripItemView };
