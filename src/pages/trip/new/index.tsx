import { Container } from '../../../components/Container';
import { Fields } from '../../../components/InputField';
import { RightContent } from '../../../components/RightContent';
import { TripListView } from '../../../components/TripListView';
import { useTrips } from '../../../features/trip/hooks';

const TripCreatePage = () => {
  const { trips, isLoading } = useTrips();

  return (
    <Container
      title="New trip"
      rightContent={(
        <RightContent title="Trips">
          <TripListView mode="card" trips={trips} isLoading={isLoading} />
        </RightContent>
      )}
    >
      <Fields isEditable buttonText="Save" />
    </Container>
  );
};

export default TripCreatePage;
