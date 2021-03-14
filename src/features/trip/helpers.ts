import dayjs from 'dayjs';
import { Trip } from './types';

export const getFormatedDate = (date: Date, format = 'MMM D') => dayjs(date).format(format);

export const getTripFormValues = (trip: Trip): any => {
  const { address, id, ...tripValues } = trip;

  const { start_date, end_date } = tripValues;

  return {
    ...tripValues,
    ...address,
    start_date: getFormatedDate(start_date, 'YYYY-MM-DD'),
    end_date: getFormatedDate(end_date, 'YYYY-MM-DD'),
  };
};

export const isPastTrip = (end_date: Date) => dayjs(end_date).isBefore(dayjs(new Date()));
