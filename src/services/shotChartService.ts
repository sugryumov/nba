import { api } from './apiService';

const transformData = (data: any): any => {
  return data;
};

export const shotChartApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchShotChart: builder.query({
      query: ({ gameId, teamId, playerId, type }) => ({
        url: `/shot-chart`,
        params: { gameId, teamId, playerId, type },
      }),
      transformResponse: data => transformData(data),
    }),
  }),
});

export const { useFetchShotChartQuery } = shotChartApi;
