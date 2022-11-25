import { api } from './apiService';

export const scoreboardApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchScoreboard: builder.query({
      query: date => ({
        url: `/scoreboard/${date}`,
      }),
    }),
  }),
});

export const { useFetchScoreboardQuery } = scoreboardApi;
