import Image from 'next/image';
import dayjs from 'dayjs';
import { Box } from '../Box';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { CountryLogo, ItemCard } from './styled';
import { Trip } from '../../features/trip/types';

type TripItemProps = {
  trip: Trip;
};

const getFormatedDate = (date: Date) => dayjs(date).format('MMM D');

const TripCardItem = ({ trip }: TripItemProps) => {
  return (
    <ItemCard mb={20} p={20} fullWidth flexDirection="column">
      <Box alignItems="center">
        <CountryLogo>
          <Image src={`/countries/${trip.address.country.toUpperCase()}.svg`} layout="fill" alt="trip_country_ac" />
        </CountryLogo>
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
          <strong>{trip.company_name}</strong>
          <br />
          {trip.address.street}
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
          {getFormatedDate(trip.end_date)}
        </Typography>
      </Box>
      <Box fullWidth style={{ marginTop: 'auto' }}>
        <Button as="link" href="/trip" bgColor="coolgray" fullWidth>
          <Typography color="coolgray">View Trip</Typography>
        </Button>
      </Box>
    </ItemCard>
  );
};

export { TripCardItem };
