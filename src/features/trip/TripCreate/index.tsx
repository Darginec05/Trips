import { Container } from '../../../components/Container';
import { RightContent } from '../../../components/RightContent';
import { TripListView } from '../../../components/TripListView';
import { useTodos } from '../hooks';

const TripCreate = () => {
  const { trips } = useTodos();

  if (!trips) return null;

  return (
    <Container
      title="New trip"
      rightContent={(
        <RightContent title="Trips">
          <TripListView mode="card" trips={trips} />
        </RightContent>
      )}
    >
      asdasd
    </Container>
  );
};

export { TripCreate };
