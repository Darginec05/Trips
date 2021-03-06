import { memo } from 'react';
import { Box } from '../../UI/Box';
import { Button } from '../../UI/Button';
import { Typography } from '../../UI/Typography';
import { ItemCard } from './styled';
import { TripItemProps } from '../../features/trip/types';
import { getFormatedDate, isPastTrip } from '../../features/trip/helpers';
import { CountryLogo } from '../CountryLogo';
import { cut } from '../../utils/cut';

const TripCardItemView = ({ trip }: TripItemProps) => {
  const isPast = isPastTrip(trip.end_date);

  return (
    <ItemCard mb={20} p={20} fullWidth flexDirection="column">
      <Box alignItems="center">
        <CountryLogo width={24} height={24} country={trip.address.country} />
        <Box ml={10}>
          <Typography weight={600}>{trip.address.country}</Typography>
        </Box>
      </Box>
      <Box mt={22}>
        <Typography color="coolgray" size="xs">
          Company
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography size="sm">
          <strong>{cut(trip.company_name, 25)}</strong>
          <br />
          {cut(trip.address.street, 120)}
        </Typography>
      </Box>
      <Box mt={22}>
        <Typography color="coolgray" size="xs">
          Date
        </Typography>
      </Box>
      <Box mt={4}>
        <Typography size="sm">
          {getFormatedDate(trip.start_date)}
          {' '}
          -
          {' '}
          {getFormatedDate(trip.end_date, 'MMM D, YYYY')}
        </Typography>
      </Box>
      <Box fullWidth style={{ marginTop: 'auto' }}>
        <Button
          isLink
          href={`/trip/[tripId]/${isPast ? 'detail' : 'edit'}`}
          asLinkHref={`/trip/${trip.id}/${isPast ? 'detail' : 'edit'}`}
          bgColor="coolgray"
          justifyContent="space-between"
          fullWidth
        >
          <Typography color="coolgray">{isPast ? 'View trip' : 'Edit trip'}</Typography>
          <img src={`/assets/${isPast ? 'arrow_right' : 'trip_edit'}.svg`} alt="trip_edit" />
        </Button>
      </Box>
    </ItemCard>
  );
};

export const TripCardItem = memo(TripCardItemView);
