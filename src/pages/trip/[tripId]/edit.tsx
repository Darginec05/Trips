import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { TripFormFields } from '../../../components/TripFormFields';
import { Loader } from '../../../UI/Loader';
import { MainContent } from '../../../components/MainContent';
import { getTripFormValues } from '../../../features/trip/helpers';
import { useEditTripMutation, useTrip } from '../../../features/trip/hooks';
import { TripDetailType } from '../../../features/trip/types';
import { Error } from '../../../components/Error';

const TripEditPage = ({ tripId }: TripDetailType) => {
  const { editTrip, error: editTripError, isLoading: editTripLoading } = useEditTripMutation(tripId);
  const { trip, isLoading, error } = useTrip(tripId);

  if (error) {
    return (
      <MainContent title="Edit trip">
        <Error message={error.status === 404 ? 'Trip not found' : 'Something went wrong. Please refresh page'} />
      </MainContent>
    );
  }

  if (!trip || isLoading) return <Loader />;

  return (
    <MainContent title="Edit trip">
      <TripFormFields
        isEditable
        handler={editTrip}
        isLoading={editTripLoading}
        error={editTripError}
        defaultValues={getTripFormValues(trip)}
      />
    </MainContent>
  );
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  return {
    props: {
      tripId: context.query.tripId,
      key: context.query.tripId, // https://github.com/vercel/next.js/issues/9992
    },
  };
};

export default TripEditPage;
