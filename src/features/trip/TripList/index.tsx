import { About } from '../../../components/About';
import { Container } from '../../../components/Container';
import { TripListView } from '../../../components/TripListView';
import { useTodos } from '../hooks';

const TripList = () => {
  const { trips, isLoading } = useTodos();

  if (!trips || isLoading) {
    return <div>loading</div>;
  }

  return (
    <Container title="Your trips" rightContent={<About />}>
      <TripListView trips={trips} mode="list" />
    </Container>
  );
};

export { TripList };
