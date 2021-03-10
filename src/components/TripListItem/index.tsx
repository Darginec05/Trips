import Image from 'next/image';
import dayjs from 'dayjs';
import { Box } from '../Box';
import { Button } from '../Button';
import { Typography } from '../Typography';
import { Item, Col, Divider, ButtonWrap, CountryLogo } from './styled';
import { Trip } from '../../features/trip/types';

type TripItemProps = {
  trip: Trip;
}

const getFormatedDate = (date: Date) => dayjs(date).format('MMM D');

const TripListItem = ({ trip }: TripItemProps) => {
  return (
    <Item mb={20} p={20} fullWidth alignItems="center" flexDirection="row">
      <Box>
        <CountryLogo>
          <Image src={`/countries/${trip.address.country.toUpperCase()}.svg`} layout="fill" alt="trip_country_ac" />
        </CountryLogo>
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
          <Typography size="sm">
            {trip.company_name}
          </Typography>
          <Divider />
          <Typography size="sm" color="coolgray">
            {trip.address.street}
          </Typography>
        </Box>
      </Col>
      <ButtonWrap alignItems="center">
        <Button padding="18px 16px" bgColor="red">
          <img src="/assets/trip_delete.svg" alt="trip_delete" />
        </Button>
        <Button padding="18px 16px" bgColor="coolgray" as="link" href={`/trip/${trip.id}/edit`}>
          <img src="/assets/trip_edit.svg" alt="trip_edit" />
        </Button>
      </ButtonWrap>
    </Item>
  );
};

export { TripListItem };
