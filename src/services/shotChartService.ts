import {
  ShotChartResponse,
  ShotChartResponseDto,
} from '@/types/response/shotChart';
import { api } from './apiService';

const transformData = (data: ShotChartResponse): ShotChartResponseDto[] =>
  data.Shot_Chart_Detail.map(shot => ({
    actionType: shot.ACTION_TYPE,
    eventType: shot.EVENT_TYPE,
    gameDate: shot.GAME_DATE,
    gameEventId: shot.GAME_EVENT_ID,
    gameId: shot.GAME_ID,
    gridType: shot.GRID_TYPE,
    homeTeam: shot.HTM,
    locX: shot.LOC_X,
    locY: shot.LOC_Y,
    minutesRemaining: shot.MINUTES_REMAINING,
    period: shot.PERIOD,
    playerId: shot.PLAYER_ID,
    playerName: shot.PLAYER_NAME,
    secondsRemaining: shot.SECONDS_REMAINING,
    shotAttemptedFlag: Boolean(shot.SHOT_ATTEMPTED_FLAG),
    shotDistance: shot.SHOT_DISTANCE,
    shotMadeFlag: Boolean(shot.SHOT_MADE_FLAG),
    shotType: shot.SHOT_TYPE,
    shotZoneArea: shot.SHOT_ZONE_AREA,
    shotZoneBasic: shot.SHOT_ZONE_BASIC,
    shotZoneRange: shot.SHOT_ZONE_RANGE,
    teamId: shot.TEAM_ID,
    teamName: shot.TEAM_NAME,
    visitorTeam: shot.VTM,
  }));

export const shotChartApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchShotChart: builder.query({
      query: ({ gameId, teamId, playerId, type }) => ({
        url: `/shot-chart`,
        params: { gameId, teamId, playerId, type },
      }),
      transformResponse: (data: ShotChartResponse) => transformData(data),
    }),
  }),
});

export const { useFetchShotChartQuery } = shotChartApi;
