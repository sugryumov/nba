type TLeagueAverages = {
  FGA: number;
  FGM: number;
  FG_PCT: number;
  GRID_TYPE: string;
  SHOT_ZONE_AREA: string;
  SHOT_ZONE_BASIC: string;
  SHOT_ZONE_RANGE: string;
};

type TShotChartDetail = {
  ACTION_TYPE: string;
  EVENT_TYPE: string;
  GAME_DATE: string;
  GAME_EVENT_ID: number;
  GAME_ID: string;
  GRID_TYPE: string;
  HTM: string;
  LOC_X: number;
  LOC_Y: number;
  MINUTES_REMAINING: number;
  PERIOD: number;
  PLAYER_ID: number;
  PLAYER_NAME: string;
  SECONDS_REMAINING: number;
  SHOT_ATTEMPTED_FLAG: number;
  SHOT_DISTANCE: number;
  SHOT_MADE_FLAG: number;
  SHOT_TYPE: string;
  SHOT_ZONE_AREA: string;
  SHOT_ZONE_BASIC: string;
  SHOT_ZONE_RANGE: string;
  TEAM_ID: number;
  TEAM_NAME: string;
  VTM: string;
};

export type ShotChartResponse = {
  LeagueAverages: TLeagueAverages[];
  Shot_Chart_Detail: TShotChartDetail[];
};

export type ShotChartResponseDto = {
  actionType: string;
  eventType: string;
  gameDate: string;
  gameEventId: number;
  gameId: string;
  gridType: string;
  homeTeam: string;
  locX: number;
  locY: number;
  minutesRemaining: number;
  period: number;
  playerId: number;
  playerName: string;
  secondsRemaining: number;
  shotAttemptedFlag: boolean;
  shotDistance: number;
  shotMadeFlag: boolean;
  shotType: string;
  shotZoneArea: string;
  shotZoneBasic: string;
  shotZoneRange: string;
  teamId: number;
  teamName: string;
  visitorTeam: string;
};
