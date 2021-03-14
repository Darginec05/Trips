import { Trip } from '../../features/trip/types';
import { useWindowSize } from '../../hooks/useWindowSize';
import { Loader } from '../../UI/Loader';
import { Error } from '../Error';
import { TripCardItem } from '../TripCardItem';
import { TripListItem } from '../TripListItem';

type Props = {
  mode: 'list' | 'card';
  isLoading: boolean;
  trips: Trip[] | undefined;
  error: any;
};

const TripListView = ({ mode, trips, isLoading, error }: Props) => {
  const { width } = useWindowSize();

  if (error) {
    return <Error message="Something went wrong. Please refresh page" />;
  }

  if (isLoading || !trips) {
    return <Loader />;
  }

  if (trips.length === 0) {
    return null;
  }

  if (mode === 'card' || width < 1000) {
    return (
      <>
        {trips.map((trip) => (
          <TripCardItem key={trip.id} trip={trip} />
        ))}
      </>
    );
  }

  return (
    <>
      {trips.map((trip) => (
        <TripListItem key={trip.id} trip={trip} />
      ))}
    </>
  );
};

export { TripListView };
