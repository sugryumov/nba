import {
  Standings,
  StandingsResponse,
  StandingsResponseDto,
} from '@/types/response/standings';
import { api } from './apiService';

const transformData = (data: Standings[]): StandingsResponseDto[] =>
  data.map(
    ({
      TeamID,
      PlayoffRank,
      TeamCity,
      TeamName,
      Conference,
      Division,
      WINS,
      LOSSES,
      WinPCT,
      ConferenceGamesBack,
      ConferenceRecord,
      DivisionRecord,
      HOME,
      ROAD,
      OT,
      L10,
      strCurrentStreak,
    }) => ({
      teamId: TeamID,
      playoffRank: PlayoffRank,
      teamCity: TeamCity,
      teamName: TeamName,
      division: Division,
      conference: Conference,
      wins: WINS,
      losses: LOSSES,
      winPct: WinPCT,
      conferenceGamesBack: ConferenceGamesBack,
      conferenceRecord: ConferenceRecord,
      divisionRecord: DivisionRecord,
      homeRecord: HOME,
      roadRecord: ROAD,
      overTime: OT,
      last10: L10,
      strCurrentStreak,
    }),
  );

export const standingsApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchStandings: builder.query({
      query: () => ({
        url: `/standings`,
      }),
      transformResponse: (data: StandingsResponse): StandingsResponseDto[] =>
        transformData(data.Standings),
    }),
  }),
});

export const { useFetchStandingsQuery } = standingsApi;
