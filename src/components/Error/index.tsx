import { Box } from '../../UI/Box';
import { Typography } from '../../UI/Typography';

type Props = {
  message: string;
};

const Error = ({ message }: Props) => {
  return (
    <Box justifyContent="center" fullWidth mt={10} mb={10}>
      <Typography color="error">{message}</Typography>
    </Box>
  );
};

export { Error };
