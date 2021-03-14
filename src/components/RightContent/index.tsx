import { useRouter } from 'next/router';
import { useTrips } from '../../features/trip/hooks';
import { About } from '../About';
import { Box } from '../../UI/Box';
import { TripListView } from '../TripListView';
import { Typography } from '../../UI/Typography';
import { Wrap } from './styled';

const RightContent = () => {
  const router = useRouter();
  const isHomePage = router.pathname === '/';
  const { trips, isLoading, error } = useTrips(isHomePage);

  const title = isHomePage ? 'Tips & tricks' : 'Trips';
  const content = isHomePage ? (
    <About />
  ) : (
    <TripListView mode="card" trips={trips} isLoading={isLoading} error={error} />
  );

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
