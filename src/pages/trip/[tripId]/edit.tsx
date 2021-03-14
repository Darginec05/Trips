import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { TripFormFields } from '../../../components/TripFormFields';
import { Loader } from '../../../components/Loader';
import { MainContent } from '../../../components/MainContent';
import { getTripFormValues } from '../../../features/trip/helpers';
import { useTrip } from '../../../features/trip/hooks';
import { TripDetailType } from '../../../features/trip/types';

const TripEditPage = ({ tripId }: TripDetailType) => {
  const { trip, isLoading } = useTrip(tripId);

  if (!trip || isLoading) return <Loader />;

  return (
    <MainContent title="Edit trip">
      <TripFormFields isEditable buttonText="Save" defaultValues={getTripFormValues(trip)} />
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
