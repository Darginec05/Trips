import { useQuery, useQueryClient } from 'react-query';
import { request } from '../../utils/request';
import { Trip } from './types';

export const useTrips = () => {
  const queryClient = useQueryClient();
  const fetchTrips = () => request<Trip[]>({ url: '/trip' });

  const cachedTrips: Trip[] | undefined = queryClient.getQueryData('Trips');
  const { data, isLoading } = useQuery('Trips', fetchTrips, {
    enabled: typeof cachedTrips === 'undefined',
    retry: 0,
  });

  return { trips: cachedTrips || data, isLoading };
};

export const useTrip = (tripId: string): { trip: Trip | undefined; isLoading: boolean } => {
  const queryClient = useQueryClient();
  const fetchTrip = async () => request<Trip>({ url: `/trip/${tripId}` });

  const cachedTrip: Trip | undefined = queryClient.getQueryData(`Trip:${tripId}`);
  const { data, isLoading } = useQuery(`Trip:${tripId}`, fetchTrip, {
    enabled: typeof cachedTrip === 'undefined',
    retry: 0,
  });

  return { trip: cachedTrip || data, isLoading };
};
