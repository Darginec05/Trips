import dayjs from 'dayjs';
import { Trip } from './types';

export const getFormatedDate = (date: Date, format = 'MMM D') => dayjs(date).format(format);

export const getTripFormValues = (trip: Trip): any => {
  const { address, id, ...tripValues } = trip;

  return { ...tripValues, ...address };
};

export const isPastTrip = (end_date: Date) => dayjs(end_date).isBefore(dayjs(new Date()));
