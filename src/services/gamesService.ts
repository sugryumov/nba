import { api } from './apiService';

export const gamesApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchGames: builder.query({
      query: date => ({
        url: `/scoreboard/${date}`,
      }),
    }),
  }),
});

export const { useFetchGamesQuery } = gamesApi;
