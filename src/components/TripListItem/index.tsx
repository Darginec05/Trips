import { Box } from '../Box';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Item, Col, Divider, ButtonWrap } from './styled';
import { Trip } from '../../features/trip/types';
import { getFormatedDate, isPastTrip } from '../../features/trip/helpers';
import { useDeleteTripMutation } from '../../features/trip/hooks';
import { CountryLogo } from '../CountryLogo';

type TripItemProps = {
  trip: Trip;
};

const TripListItem = ({ trip }: TripItemProps) => {
  const isPast = isPastTrip(trip.end_date);
  const { deleteTrip } = useDeleteTripMutation(trip.id);

  return (
    <Item mb={20} p={20} fullWidth alignItems="center" flexDirection="row">
      <Box>
        <CountryLogo width={40} height={40} country={trip.address.country} />
      </Box>
      <Col ml={20} flexDirection="column" justifyContent="space-between">
        <Box alignItems="center">
          <Typography size="md" weight={600}>
            {trip.address.country}
          </Typography>
          <Divider />
          <Typography size="sm" color="coolgray">
            {getFormatedDate(trip.start_date)}
            {' '}
            -
            {' '}
            {getFormatedDate(trip.end_date)}
          </Typography>
        </Box>
        <Box alignItems="center">
          <Typography size="sm">{trip.company_name}</Typography>
          <Divider />
          <Typography size="sm" color="coolgray">
            {trip.address.street}
          </Typography>
        </Box>
      </Col>
      <ButtonWrap alignItems="center">
        <Button padding="18px 16px" bgColor="red" onClick={deleteTrip}>
          <img src="/assets/trip_delete.svg" alt="trip_delete" />
        </Button>
        <Button
          isLink
          href={`/trip/[tripId]/${isPast ? 'detail' : 'edit'}`}
          asLinkHref={`/trip/${trip.id}/${isPast ? 'detail' : 'edit'}`}
          padding="18px 16px"
          bgColor="coolgray"
        >
          <img src={`/assets/${isPast ? 'arrow_right' : 'trip_edit'}.svg`} alt="trip_edit" />
        </Button>
      </ButtonWrap>
    </Item>
  );
};

export { TripListItem };
