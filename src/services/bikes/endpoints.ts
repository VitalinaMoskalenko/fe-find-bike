const baseUrl = 'https://bikeindex.org:443/api/v3';

export const searchBikesEndpoint = `${baseUrl}/search`;

export const getBikeDetailsEndpoint = (bikeId: string) => `${baseUrl}/bikes/${bikeId}`;
