import { api } from './apiService';

const transformData = (data: any) => {
  return data;
};

export const boxScoreApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchBoxScore: builder.query({
      query: (gameId: string) => ({
        url: `/box-score/${gameId}`,
      }),
      transformResponse: data => transformData(data),
    }),
  }),
});

export const { useFetchBoxScoreQuery } = boxScoreApi;
