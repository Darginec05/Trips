import { MainContent } from '../components/MainContent';
import { TripListView } from '../components/TripListView';
import { useTrips } from '../features/trip/hooks';

const TripListPage = () => {
  const { trips, isLoading } = useTrips();

  return (
    <MainContent title="Your trips">
      <TripListView trips={trips} mode="list" isLoading={isLoading} />
    </MainContent>
  );
};

export default TripListPage;
