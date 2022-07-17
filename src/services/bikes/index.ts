import { SearchBikesResponse, BikeDetailsResponse } from '../../types/api';
import { quickFetch } from '../quickFetch';
import { getBikeDetailsEndpoint, searchBikesEndpoint } from './endpoints';

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

export const getBikeDetailsService = (bikeId: string) =>
  quickFetch<BikeDetailsResponse>('GET', getBikeDetailsEndpoint(bikeId));
