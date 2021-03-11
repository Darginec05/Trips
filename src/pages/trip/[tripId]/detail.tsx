import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { Fields } from '../../../components/InputField';
import { MainContent } from '../../../components/MainContent';
import { getTripFormValues } from '../../../features/trip/helpers';
import { useTrip } from '../../../features/trip/hooks';
import { TripDetailType } from '../../../features/trip/types';

const TripDetailPage = ({ tripId }: TripDetailType) => {
  const { trip } = useTrip(tripId);

  if (!trip) return null;

  return (
    <MainContent title="View trip">
      <Fields isEditable={false} buttonText="Save" defaultValues={getTripFormValues(trip)} />
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
