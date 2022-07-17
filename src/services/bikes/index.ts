import { SearchBikesResponse } from '../../types/api/SearchBikesResponse';
import { quickFetch } from '../quickFetch';
import { searchBikesEndpoint } from './endpoints';

export const searchBikesService = (location: string) =>
  quickFetch<SearchBikesResponse>('GET', searchBikesEndpoint, {
    params: {
      page: 1,
      per_page: 25,
      location,
      distance: 10,
      stolenness: 'all',
    },
  });
