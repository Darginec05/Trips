import { useQuery, useQueryClient } from 'react-query';
import { request } from '../../utils/request';
import { Trip } from './types';

export function useTodos() {
  const queryClient = useQueryClient();
  const fetchTrips = () => request({ url: '/trip' });

  const cachedTrips: Trip[] | undefined = queryClient.getQueryData('Trips');
  const { data, isLoading } = useQuery('Trips', fetchTrips, { enabled: typeof cachedTrips === 'undefined' });

  return { trips: cachedTrips || data, isLoading };
}
