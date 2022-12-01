type Conference = 'East' | 'West';
type Divisions =
  | 'Atlantic'
  | 'Central'
  | 'Southeast'
  | 'Northwest'
  | 'Pacific'
  | 'Southwest';

export type Standings = {
  AheadAtHalf: string;
  AheadAtThird: string;
  Apr: null;
  Aug: null;
  BehindAtHalf: string;
  BehindAtThird: string;
  ClinchIndicator: string;
  ClinchedConferenceTitle: number;
  ClinchedDivisionTitle: number;
  ClinchedPlayoffBirth: number;
  Conference: Conference;
  ConferenceGamesBack: number;
  ConferenceRecord: string;
  CurrentHomeStreak: number;
  CurrentRoadStreak: number;
  CurrentStreak: number;
  Dec: null;
  DiffPointsPG: number;
  Division: Divisions;
  DivisionGamesBack: number;
  DivisionRank: number;
  DivisionRecord: string;
  EliminatedConference: number;
  EliminatedDivision: number;
  Feb: null;
  FewerTurnovers: string;
  HOME: string;
  Jan: null;
  Jul: null;
  Jun: null;
  L10: string;
  LOSSES: number;
  Last10Home: string;
  Last10Road: string;
  LeadInFGPCT: string;
  LeadInReb: string;
  LeagueID: string;
  LeagueRank: number;
  LongHomeStreak: number;
  LongLossStreak: number;
  LongRoadStreak: number;
  LongWinStreak: number;
  Mar: null;
  May: null;
  Nov: string;
  OT: string;
  Oct: string;
  OppOver500: string;
  OppPointsPG: number;
  OppScore100PTS: string;
  PlayoffRank: number;
  PointsPG: number;
  PostAS: null;
  PreAS: string;
  ROAD: string;
  Record: string;
  Score100PTS: string;
  SeasonID: string;
  Sep: null;
  TeamCity: string;
  TeamID: number;
  TeamName: string;
  TenPTSOrMore: string;
  ThreePTSOrLess: string;
  TiedAtHalf: string;
  TiedAtThird: string;
  WINS: number;
  WinPCT: number;
  strCurrentHomeStreak: string;
  strCurrentRoadStreak: string;
  strCurrentStreak: string;
  strLongHomeStreak: string;
  strLongRoadStreak: string;
  vsAtlantic: string;
  vsCentral: string;
  vsEast: string;
  vsNorthwest: string;
  vsPacific: string;
  vsSoutheast: string;
  vsSouthwest: string;
  vsWest: string;
};

export type StandingsResponse = {
  Standings: Standings[];
};

export type StandingsResponseDto = {
  teamId: number;
  playoffRank: number;
  divisionRank: number;
  conference: Conference;
  division: Divisions;
  teamCity: string;
  teamName: string;
  wins: number;
  losses: number;
  winPct: number;
  conferenceGamesBack: number;
  conferenceRecord: string;
  divisionRecord: string;
  homeRecord: string;
  roadRecord: string;
  overTime: string;
  last10: string;
  strCurrentStreak: string;
};

export type GroupBy = 'conference' | 'division';
