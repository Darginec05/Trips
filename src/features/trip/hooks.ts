import { useMutation, useQuery, useQueryClient } from 'react-query';
import { request } from '../../utils/request';
import { AddTripResponse, Trip, TripFormData, TripHookHandler } from './types';

/**
 *
 * @param disable
 * @returns
 */
export const useTrips = (disable = false) => {
  const queryClient = useQueryClient();
  const fetchTrips = () => request<Trip[]>({ url: '/trip' });

  const cachedTrips: Trip[] | undefined = queryClient.getQueryData<Trip[]>('Trips');
  const { data, isLoading, error } = useQuery('Trips', fetchTrips, {
    enabled: typeof cachedTrips === 'undefined' && !disable,
    retry: 0,
  });

  return { trips: cachedTrips || data, isLoading, error };
};

/**
 *
 * @param tripId -
 * @returns
 */
export const useTrip = (tripId: string): { trip: Trip | undefined; isLoading: boolean, error: any } => {
  const queryClient = useQueryClient();
  const fetchTrip = () => request<Trip>({ url: `/trip/${tripId}` });

  const cachedTrip: Trip | undefined = queryClient.getQueryData<Trip>(`Trip:${tripId}`);
  const { data, isLoading, error } = useQuery(`Trip:${tripId}`, fetchTrip, {
    enabled: typeof cachedTrip === 'undefined',
    retry: 0,
  });

  return { trip: cachedTrip || data, isLoading, error };
};

/**
 *
 * @returns
 */
export const useAddTripMutation = (): {
  addTrip: TripHookHandler<AddTripResponse, TripFormData>;
  isLoading: boolean;
  error: any;
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

  const { mutateAsync, isLoading, error } = useMutation<AddTripResponse, unknown, TripFormData>(addTrip, {
    onSuccess,
  });

  return { addTrip: mutateAsync, isLoading, error };
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
    const _trips = queryClient.getQueryData<Trip[]>('Trips');
    if (_trips) {
      queryClient.setQueryData<Trip[]>(
        'Trips',
        _trips.filter((trip) => trip.id !== tripId),
      );
    }
  };

  const { mutateAsync, isLoading, error } = useMutation(deleteTrip, {
    onSuccess,
  });

  return { deleteTrip: mutateAsync, isLoading, error };
};

/**
 *
 * @returns
 */
export const useEditTripMutation = (tripId: string): {
  editTrip: TripHookHandler<AddTripResponse, TripFormData>;
  isLoading: boolean;
  error: any;
} => {
  const queryClient = useQueryClient();

  const editTrip = async (body: TripFormData) => {
    const _trip = await request<AddTripResponse>({ url: `/trip/${tripId}`, method: 'PUT', body });
    return _trip;
  };

  const onSuccess = async (_response: AddTripResponse, updatedTrip: TripFormData) => {
    const cached_trips = queryClient.getQueryData<Trip[]>('Trips');
    const cached_trip = queryClient.getQueryData<Trip>(`Trip:${tripId}`);

    if (cached_trip) {
      queryClient.setQueryData<Trip>(`Trip:${tripId}`, { id: tripId, ...updatedTrip });
    }

    if (cached_trips) {
      const updatedTrips = cached_trips?.map((_trip) => (_trip.id === tripId ? { ..._trip, ...updatedTrip } : _trip));
      queryClient.setQueryData<Trip[]>(
        'Trips',
        updatedTrips,
      );
    }
  };

  const { mutateAsync, isLoading, error } = useMutation<AddTripResponse, unknown, TripFormData>(editTrip, {
    onSuccess,
  });

  return { editTrip: mutateAsync, isLoading, error };
};
