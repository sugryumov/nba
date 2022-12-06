import { api } from './apiService';
import {
  BoxScoreResponse,
  BoxScoreResponseDto,
} from '@/types/response/boxScore';

const transformData = (data: BoxScoreResponse) => {
  const { homeTeam, awayTeam } = data.game;

  return {
    awayTeam,
    homeTeam,
  };
};

export const boxScoreApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchBoxScore: builder.query({
      query: (gameId: string) => ({
        url: `/box-score/${gameId}`,
      }),
      transformResponse: (data: BoxScoreResponse): BoxScoreResponseDto =>
        transformData(data),
    }),
  }),
});

export const { useFetchBoxScoreQuery } = boxScoreApi;
