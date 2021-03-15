import { Error } from '../components/Error';
import { Box } from '../UI/Box';

const NotFound = () => (
  <Box fullWidth mt={50} alignItems="center" flexDirection="column">
    <Error message="Page not found" />
    <img src="/assets/not_found.gif" alt="not_found_page" />
  </Box>
);

export default NotFound;
