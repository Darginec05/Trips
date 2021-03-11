import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Container } from '../../../components/Container';
import { Fields } from '../../../components/InputField';
import { RightContent } from '../../../components/RightContent';
import { TripListView } from '../../../components/TripListView';
import { getTripFormValues } from '../../../features/trip/helpers';
import { useTrip, useTrips } from '../../../features/trip/hooks';
import { TripDetailType } from '../../../features/trip/types';

const TripDetailPage = ({ tripId }: TripDetailType) => {
  const { trips, isLoading } = useTrips();
  const { trip } = useTrip(tripId);

  if (!trip) return null;

  return (
    <Container
      title="View trip"
      rightContent={(
        <RightContent title="Trips">
          <TripListView mode="card" trips={trips} isLoading={isLoading} />
        </RightContent>
    )}
    >
      <Fields isEditable={false} buttonText="Save" defaultValues={getTripFormValues(trip)} />
    </Container>
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

export default TripDetailPage;
