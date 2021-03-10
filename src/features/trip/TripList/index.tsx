import { useQuery } from 'react-query';
import { About } from '../../../components/About';
import { Container } from '../../../components/Container';
import { request } from '../../../utils/request';
import { TripItem } from '../TripItem';
import { Trip } from '../types';

const TripList = () => {
  const fetchTrips = () => request({ url: '/trip' });

  const { data: trips, isLoading } = useQuery<Trip[]>('Trip', fetchTrips);

  if (!trips || isLoading) {
    return <div>loading</div>;
  }

  return (
    <Container title="Your trips" rightContent={<About />}>
      {trips.map((trip) => (
        <TripItem trip={trip} key={trip.id} />
      ))}
    </Container>
  );
};

export { TripList };
