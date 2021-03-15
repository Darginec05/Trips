import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { TripFormFields } from '../../../components/TripFormFields';
import { Loader } from '../../../UI/Loader';
import { MainContent } from '../../../components/MainContent';
import { getTripFormValues } from '../../../features/trip/helpers';
import { useTrip } from '../../../features/trip/hooks';
import { TripDetailType } from '../../../features/trip/types';
import { Error } from '../../../components/Error';

const TripDetailPage = ({ tripId }: TripDetailType) => {
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
    <MainContent title="View trip">
      {/* @ts-ignore: Unreachable code error */}
      <TripFormFields
        isEditable={false}
        defaultValues={getTripFormValues(trip)}
        isLoading={false}
        error={null}
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

export default TripDetailPage;
