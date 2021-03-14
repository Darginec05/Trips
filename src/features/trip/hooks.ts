import { UseMutateAsyncFunction, useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from '../../utils/request';
import { AddTripResponse, Trip, TripFormData } from './types';

/**
 *
 * @param disable
 * @returns
 */
export const useTrips = (disable = false) => {
  const queryClient = useQueryClient();
  const fetchTrips = () => request<Trip[]>({ url: '/trip' });

  const cachedTrips: Trip[] | undefined = queryClient.getQueryData<Trip[]>('Trips');
  const { data, isLoading } = useQuery('Trips', fetchTrips, {
    enabled: typeof cachedTrips === 'undefined' && !disable,
    retry: 0,
  });

  return { trips: cachedTrips || data, isLoading };
};

/**
 *
 * @param tripId -
 * @returns
 */
export const useTrip = (tripId: string): { trip: Trip | undefined; isLoading: boolean } => {
  const queryClient = useQueryClient();
  const fetchTrip = () => request<Trip>({ url: `/trip/${tripId}` });

  const cachedTrip: Trip | undefined = queryClient.getQueryData<Trip>(`Trip:${tripId}`);
  const { data, isLoading } = useQuery(`Trip:${tripId}`, fetchTrip, {
    enabled: typeof cachedTrip === 'undefined',
    retry: 0,
  });

  return { trip: cachedTrip || data, isLoading };
};

/**
 *
 * @returns
 */
export const useAddTripMutation = (): {
  addTrip: UseMutateAsyncFunction<AddTripResponse, unknown, TripFormData>;
  isLoading: boolean;
} => {
  const queryClient = useQueryClient();

  const addTrip = async (body: TripFormData) => {
    const _trip = await request<AddTripResponse>({ url: '/trip', method: 'POST', body });
    return _trip;
  };

  const onSuccess = async (response: AddTripResponse, trip: TripFormData) => {
    const prevTrips = queryClient.getQueryData<Trip[]>('Trips');
    if (prevTrips) {
      queryClient.setQueryData<Trip[]>('Trips', [...prevTrips, { ...trip, id: response.id }]);
    }
  };

  const { mutateAsync, isLoading } = useMutation<AddTripResponse, unknown, TripFormData>(addTrip, {
    onSuccess,
  });

  return { addTrip: mutateAsync, isLoading };
};

/**
 *
 * @param tripId
 * @returns
 */
export const useDeleteTripMutation = (tripId: string) => {
  const queryClient = useQueryClient();

  const deleteTrip = () => request<unknown>({ url: `/trip/${tripId}`, method: 'DELETE' });

  const onSuccess = async () => {
    const prevTrips = queryClient.getQueryData<Trip[]>('Trips');
    if (prevTrips) {
      queryClient.setQueryData<Trip[]>(
        'Trips',
        prevTrips.filter((trip) => trip.id !== tripId),
      );
    }
  };

  const { mutateAsync, isLoading } = useMutation(deleteTrip, {
    onSuccess,
  });

  return { deleteTrip: mutateAsync, isLoading };
};

/**
 *
 * @returns
 */
export const useEditTripMutation = (tripId: string): {
  addTrip: UseMutateAsyncFunction<AddTripResponse, unknown, TripFormData>;
  isLoading: boolean;
} => {
  const queryClient = useQueryClient();

  const addTrip = async (body: TripFormData) => {
    const _trip = await request<AddTripResponse>({ url: `/trip/${tripId}`, method: 'PUT', body });
    return _trip;
  };

  const onSuccess = async (response: AddTripResponse, trip: TripFormData) => {
    const prevTrips = queryClient.getQueryData<Trip[]>('Trips');
    if (prevTrips) {
      queryClient.setQueryData<Trip[]>('Trips', [...prevTrips, { ...trip, id: response.id }]);
    }
  };

  const { mutateAsync, isLoading } = useMutation<AddTripResponse, unknown, TripFormData>(addTrip, {
    onSuccess,
  });

  return { addTrip: mutateAsync, isLoading };
};
