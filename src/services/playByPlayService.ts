import {
  PlayByPlayResponse,
  PlayByPlayResponseDto,
} from '@/types/response/playByPlay';
import { api } from './apiService';

const transformData = (data: PlayByPlayResponse): PlayByPlayResponseDto[] => {
  const { PlayByPlay } = data;

  return PlayByPlay.map(item => ({
    gameId: item.GAME_ID,
    eventMsgAction: item.EVENTMSGACTIONTYPE,
    eventMsgType: item.EVENTMSGTYPE,
    eventNum: item.EVENTNUM,
    neutralDescription: item.NEUTRALDESCRIPTION,
    homeDescription: item.HOMEDESCRIPTION,
    pcTimeString: item.PCTIMESTRING,
    period: item.PERIOD,
    person1Type: item.PERSON1TYPE,
    person2Type: item.PERSON2TYPE,
    person3Type: item.PERSON3TYPE,
    player1Id: item.PLAYER1_ID,
    player1Name: item.PLAYER1_NAME,
    player1TeamAbbreviation: item.PLAYER1_TEAM_ABBREVIATION,
    player1TeamCity: item.PLAYER1_TEAM_CITY,
    player1TeamId: item.PLAYER1_TEAM_ID,
    player1TeamNickName: item.PLAYER1_TEAM_NICKNAME,
    player2Id: item.PLAYER2_ID,
    player2Name: item.PLAYER2_NAME,
    player2TeamAbbreviation: item.PLAYER2_TEAM_ABBREVIATION,
    player2TeamCity: item.PLAYER2_TEAM_CITY,
    player2TeamId: item.PLAYER2_TEAM_ID,
    player2TeamNickName: item.PLAYER2_TEAM_NICKNAME,
    player3Id: item.PLAYER3_ID,
    player3Name: item.PLAYER3_NAME,
    player3TeamAbbreviation: item.PLAYER3_TEAM_ABBREVIATION,
    player3TeamCity: item.PLAYER3_TEAM_CITY,
    player3TeamId: item.PLAYER3_TEAM_ID,
    player3TeamNickName: item.PLAYER3_TEAM_NICKNAME,
    score: item.SCORE,
    visitorDescription: item.VISITORDESCRIPTION,
    videoAvailableFlag: Boolean(item.VIDEO_AVAILABLE_FLAG),
  }));
};

export const playByPlayApi = api.injectEndpoints({
  endpoints: builder => ({
    fetchPlayByPlay: builder.query({
      query: (gameId: string) => ({
        url: `/play-by-play/${gameId}`,
      }),
      transformResponse: (data: PlayByPlayResponse): PlayByPlayResponseDto[] =>
        transformData(data),
    }),
  }),
});

export const { useFetchPlayByPlayQuery } = playByPlayApi;
