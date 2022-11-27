type TAvailable = {
  GAME_ID: string;
  PT_AVAILABLE: number;
};

type TConfStandings = {
  CONFERENCE: 'East' | 'West';
  G: number;
  HOME_RECORD: string;
  L: number;
  LEAGUE_ID: string;
  ROAD_RECORD: string;
  SEASON_ID: string;
  STANDINGSDATE: string;
  TEAM: string;
  TEAM_ID: number;
  W: number;
  W_PCT: number;
};

type TGameHeader = {
  GAMECODE: string;
  GAME_DATE_EST: string;
  GAME_ID: string;
  GAME_SEQUENCE: number;
  GAME_STATUS_ID: number;
  GAME_STATUS_TEXT: string;
  HOME_TEAM_ID: number;
  LIVE_PC_TIME: string;
  LIVE_PERIOD: number;
  LIVE_PERIOD_TIME_BCAST: string;
  NATL_TV_BROADCASTER_ABBREVIATION: null;
  SEASON: string;
  VISITOR_TEAM_ID: number;
  WH_STATUS: number;
};

type TLastMeeting = {
  GAME_ID: string;
  LAST_GAME_DATE_EST: string;
  LAST_GAME_HOME_TEAM_ABBREVIATION: string;
  LAST_GAME_HOME_TEAM_CITY: string;
  LAST_GAME_HOME_TEAM_ID: number;
  LAST_GAME_HOME_TEAM_NAME: string;
  LAST_GAME_HOME_TEAM_POINTS: number;
  LAST_GAME_ID: string;
  LAST_GAME_VISITOR_TEAM_CITY: string;
  LAST_GAME_VISITOR_TEAM_CITY1: string;
  LAST_GAME_VISITOR_TEAM_ID: number;
  LAST_GAME_VISITOR_TEAM_NAME: string;
  LAST_GAME_VISITOR_TEAM_POINTS: number;
};

type TLineScore = {
  AST: number;
  FG3_PCT: number;
  FG_PCT: number;
  FT_PCT: number;
  GAME_DATE_EST: string;
  GAME_ID: string;
  GAME_SEQUENCE: number;
  PTS: number;
  PTS_OT1: number;
  PTS_OT2: number;
  PTS_OT3: number;
  PTS_OT4: number;
  PTS_OT5: number;
  PTS_OT6: number;
  PTS_OT7: number;
  PTS_OT8: number;
  PTS_OT9: number;
  PTS_OT10: number;
  PTS_QTR1: number;
  PTS_QTR2: number;
  PTS_QTR3: number;
  PTS_QTR4: number;
  REB: number;
  TEAM_ABBREVIATION: string;
  TEAM_CITY_NAME: string;
  TEAM_ID: number;
  TEAM_WINS_LOSSES: string;
  TOV: number;
};

type TSeriesStandings = {
  GAME_DATE_EST: string;
  GAME_ID: string;
  HOME_TEAM_ID: number;
  HOME_TEAM_LOSSES: number;
  HOME_TEAM_WINS: number;
  SERIES_LEADER: string;
  VISITOR_TEAM_ID: number;
};

export interface GamesResponse {
  Available: TAvailable[];
  EastConfStandingsByDay: TConfStandings[];
  GameHeader: TGameHeader[];
  LastMeeting: TLastMeeting[];
  LineScore: TLineScore[];
  SeriesStandings: TSeriesStandings[];
  WestConfStandingsByDay: TConfStandings[];
}

export interface GameResponseDto {
  gameId: string;
  gameStatusText: string;
  homeTeam: string;
  visitorTeam: string;
  homeTeamPoints: number;
  visitorTeamPoints: number;
  homeTeamRecord: string;
  visitorTeamRecord: string;
}
