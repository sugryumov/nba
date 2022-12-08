import { GameResponseDto, GamesResponse } from '@/types/response/games';
import { api } from './apiService';

const transformData = (data: GamesResponse) => {
  const compareData = data.LineScore.map(game => {
    const findHeader = data.GameHeader.find(
      ({ GAME_ID }) => GAME_ID === game.GAME_ID,
    )!;

    return {
      ...game,
      GAME_STATUS_ID: findHeader.GAME_STATUS_ID,
      GAME_STATUS_TEXT: findHeader.GAME_STATUS_TEXT,
    };
  });

  const games = compareData.reduce((acc, cur) => {
    const hasGameIdProperty = Object.prototype.hasOwnProperty.call(
      acc,
      cur.GAME_ID,
    );

    if (hasGameIdProperty) {
      acc[cur.GAME_ID] = {
        ...acc[cur.GAME_ID],
        homeTeam: cur.TEAM_ABBREVIATION,
        homeTeamRecord: cur.TEAM_WINS_LOSSES,
        homeTeamPoints: cur.PTS,
      };
    } else {
      acc[cur.GAME_ID] = {
        gameId: cur.GAME_ID,
        gameStatusId: cur.GAME_STATUS_ID,
        gameStatusText: cur.GAME_STATUS_TEXT,
        homeTeam: '',
        homeTeamRecord: '',
        homeTeamPoints: 0,
        visitorTeam: cur.TEAM_ABBREVIATION,
        visitorTeamRecord: cur.TEAM_WINS_LOSSES,
        visitorTeamPoints: cur.PTS,
      };
    }
    return acc;
  }, {} as { [key: string]: GameResponseDto });

  return Object.values(games);
};

export const gamesApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchGames: builder.query({
      query: (date: string) => ({
        url: `/scoreboard/${date}`,
      }),
      transformResponse: (data: GamesResponse): GameResponseDto[] =>
        transformData(data),
    }),
  }),
});

export const { useFetchGamesQuery } = gamesApi;
