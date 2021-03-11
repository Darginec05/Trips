import { Trip } from '../../features/trip/types';
import { Loader } from '../Loader';
import { TripCardItem } from '../TripCardItem';
import { TripListItem } from '../TripListItem';

type Props = {
  mode: 'list' | 'card';
  isLoading: boolean;
  trips: Trip[] | undefined;
};

const TripListView = ({ mode, trips, isLoading }: Props) => {
  if (isLoading || !trips) {
    return <Loader />;
  }

  if (trips.length === 0) {
    return null;
  }

  if (mode === 'card') {
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
