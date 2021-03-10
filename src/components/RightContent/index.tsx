import { Box } from '../Box';
import { Typography } from '../Typography';
import { Wrap } from './styled';

type Props = {
  children?: any;
  title: string;
};

const RightContent = ({ children, title }: Props) => {
  return (
    <Wrap>
      <Box mb={40}>
        <Typography size="lg" as="h2">
          {title}
        </Typography>
      </Box>
      {children}
    </Wrap>
  );
};

export { RightContent };
