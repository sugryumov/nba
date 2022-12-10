type TAvailableVideo = {
  VIDEO_AVAILABLE_FLAG: number;
};

type TPlayByPlay = {
  EVENTMSGACTIONTYPE: number;
  EVENTMSGTYPE: number;
  EVENTNUM: number;
  GAME_ID: string;
  HOMEDESCRIPTION: string;
  NEUTRALDESCRIPTION: string;
  PCTIMESTRING: string;
  PERIOD: number;
  PERSON1TYPE: number;
  PERSON2TYPE: number;
  PERSON3TYPE: number;
  PLAYER1_ID: number;
  PLAYER1_NAME: string;
  PLAYER1_TEAM_ABBREVIATION: string;
  PLAYER1_TEAM_CITY: string;
  PLAYER1_TEAM_ID: number;
  PLAYER1_TEAM_NICKNAME: string;
  PLAYER2_ID: number;
  PLAYER2_NAME: string;
  PLAYER2_TEAM_ABBREVIATION: string;
  PLAYER2_TEAM_CITY: string;
  PLAYER2_TEAM_ID: number;
  PLAYER2_TEAM_NICKNAME: string;
  PLAYER3_ID: number;
  PLAYER3_NAME: string;
  PLAYER3_TEAM_ABBREVIATION: string;
  PLAYER3_TEAM_CITY: string;
  PLAYER3_TEAM_ID: number;
  PLAYER3_TEAM_NICKNAME: string;
  SCORE: string;
  SCOREMARGIN: string;
  VIDEO_AVAILABLE_FLAG: number;
  VISITORDESCRIPTION: null;
  WCTIMESTRING: string;
};

export interface PlayByPlayResponse {
  AvailableVideo: TAvailableVideo[];
  PlayByPlay: TPlayByPlay[];
}

export interface PlayByPlayResponseDto {
  eventMsgAction: number;
  eventMsgType: number;
  eventNum: number;
  neutralDescription: string;
  homeDescription: string;
  pcTimeString: string;
  period: number;
  person1Type: number;
  person2Type: number;
  person3Type: number;
  player1Id: number;
  player1Name: string;
  player1TeamAbbreviation: string;
  player1TeamCity: string;
  player1TeamId: number;
  player1TeamNickName: string;
  player2Id: number;
  player2Name: string;
  player2TeamAbbreviation: string;
  player2TeamCity: string;
  player2TeamId: number;
  player2TeamNickName: string;
  player3Id: number;
  player3Name: string;
  player3TeamAbbreviation: string;
  player3TeamCity: string;
  player3TeamId: number;
  player3TeamNickName: string;
  score: string;
  visitorDescription: string | null;
  videoAvailableFlag: boolean;
}
