import { useRouter } from 'next/router';
import { useTrips } from '../../features/trip/hooks';
import { About } from '../About';
import { Box } from '../Box';
import { TripListView } from '../TripListView';
import { Typography } from '../Typography';
import { Wrap } from './styled';

const RightContent = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const { trips, isLoading } = useTrips(isHomePage);

  const title = isHomePage ? 'Tips & tricks' : 'Trips';
  const content = isHomePage ? <About /> : <TripListView mode="card" trips={trips} isLoading={isLoading} />;

  return (
    <Wrap>
      <Box mb={40}>
        <Typography size="lg" as="h2">
          {title}
        </Typography>
      </Box>
      {content}
    </Wrap>
  );
};

export { RightContent };
