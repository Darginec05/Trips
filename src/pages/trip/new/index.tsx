import { TripFormFields } from '../../../components/TripFormFields';
import { MainContent } from '../../../components/MainContent';
import { useAddTripMutation } from '../../../features/trip/hooks';

const TripCreatePage = () => {
  const { addTrip, isLoading, error } = useAddTripMutation();

  return (
    <MainContent title="New trip">
      <TripFormFields isEditable handler={addTrip} error={error} isLoading={isLoading} />
    </MainContent>
  );
};

export default TripCreatePage;
