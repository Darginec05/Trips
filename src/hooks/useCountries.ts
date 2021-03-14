import { useQuery, useQueryClient } from 'react-query';
import { request } from '../utils/request';

type CountriesResponse = {
  label: string;
  value: string;
};

export const useCountries = () => {
  const queryClient = useQueryClient();
  const fetchCountries = () => request<CountriesResponse[]>({ url: '/country' });

  const countries: CountriesResponse[] | undefined = queryClient.getQueryData<CountriesResponse[]>('Countries');
  const { data } = useQuery('Countries', fetchCountries, {
    enabled: typeof countries === 'undefined',
  });

  return { countries: countries || data };
};
