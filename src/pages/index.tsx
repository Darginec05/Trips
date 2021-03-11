import { About } from '../components/About';
import { Container } from '../components/Container';
import { TripListView } from '../components/TripListView';
import { useTrips } from '../features/trip/hooks';

const TripListPage = () => {
  const { trips, isLoading } = useTrips();

  return (
    <Container title="Your trips" rightContent={<About />}>
      <TripListView trips={trips} mode="list" isLoading={isLoading} />
    </Container>
  );
};

export default TripListPage;
