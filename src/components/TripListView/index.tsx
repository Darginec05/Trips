import { Trip } from '../../features/trip/types';
import { TripCardItem } from '../TripCardItem';
import { TripListItem } from '../TripListItem';

type Props = {
  mode: 'list' | 'card';
  trips: Trip[];
};

const TripListView = ({ mode, trips }: Props) => {
  if (trips.length === 0) {
    return <div>add trip</div>;
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
