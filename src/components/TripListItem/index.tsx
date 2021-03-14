import { memo } from 'react';
import { Box } from '../../UI/Box';
import { Button } from '../../UI/Button';
import { Typography } from '../../UI/Typography';
import { Item, Col, Divider, ButtonWrap } from './styled';
import { TripItemProps } from '../../features/trip/types';
import { getFormatedDate, isPastTrip } from '../../features/trip/helpers';
import { useDeleteTripMutation } from '../../features/trip/hooks';
import { CountryLogo } from '../CountryLogo';
import { cut } from '../../utils/cut';
import { Error } from '../Error';

const TripListItemRender = ({ trip }: TripItemProps) => {
  const isPast = isPastTrip(trip.end_date);
  const { deleteTrip, isLoading, error } = useDeleteTripMutation(trip.id);

  return (
    <>
      {error && <Error message="Something went wrong. Try again" />}
      <Item mb={20} p={20} fullWidth alignItems="center" flexDirection="row" isLoading={isLoading}>
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
            <Typography size="sm">{cut(trip.company_name, 25)}</Typography>
            <Divider />
            <Typography size="sm" color="coolgray">
              {cut(trip.address.street, 50)}
            </Typography>
          </Box>
        </Col>
        <ButtonWrap alignItems="center">
          <Button padding="0 16px" bgColor="red" justifyContent="center" onClick={deleteTrip}>
            <img src="/assets/trip_delete.svg" alt="trip_delete" />
          </Button>
          <Button
            justifyContent="center"
            isLink
            href={`/trip/[tripId]/${isPast ? 'detail' : 'edit'}`}
            asLinkHref={`/trip/${trip.id}/${isPast ? 'detail' : 'edit'}`}
            padding="0"
            bgColor="coolgray"
          >
            <img src={`/assets/${isPast ? 'arrow_right' : 'trip_edit'}.svg`} alt="trip_edit" />
          </Button>
        </ButtonWrap>
      </Item>
    </>
  );
};

export const TripListItem = memo(TripListItemRender);
