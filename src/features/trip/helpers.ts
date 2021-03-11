import dayjs from 'dayjs';
import { Trip, TripFormValues } from './types';

export const getFormatedDate = (date: Date, format = 'MMM D') => dayjs(date).format(format);

export const getTripFormValues = (trip: Trip): TripFormValues => {
  const { address, id, ...tripValues } = trip;

  return { ...tripValues, ...address };
};
