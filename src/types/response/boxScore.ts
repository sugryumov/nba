type Arena = {
  arenaCity: string;
  arenaCountry: string;
  arenaId: number;
  arenaName: string;
  arenaState: string;
  arenaTimezone: string;
};

type Period = {
  period: number;
  periodType: string;
  score: number;
};

export type BoxScorePlayer = {
  familyName: string;
  firstName: string;
  jerseyNum: string;
  name: string;
  nameI: string;
  oncourt: string;
  order: number;
  personId: number;
  played: string;
  position: string;
  starter: string;
  notPlayingReason: string;
  notPlayingDescription: string;
  statistics: BoxScoreStatistics;
  status: string;
};

export interface BoxScoreAndMatchInfo extends BoxScorePlayer {
  teamId: number;
  gameId: string;
}

export type BoxScoreStatistics = {
  assists: number;
  assistsTurnoverRatio: number;
  benchPoints: number;
  biggestLead: number;
  biggestLeadScore: string;
  biggestScoringRun: number;
  biggestScoringRunScore: string;
  blocks: number;
  blocksReceived: number;
  fastBreakPointsAttempted: number;
  fastBreakPointsMade: number;
  fastBreakPointsPercentage: number;
  fieldGoalsAttempted: number;
  fieldGoalsEffectiveAdjusted: number;
  fieldGoalsMade: number;
  fieldGoalsPercentage: number;
  foulsDrawn: number;
  foulsOffensive: number;
  foulsPersonal: number;
  foulsTeam: number;
  foulsTeamTechnical: number;
  foulsTechnical: number;
  freeThrowsAttempted: number;
  freeThrowsMade: number;
  freeThrowsPercentage: number;
  leadChanges: number;
  minutes: string;
  minutesCalculated: string;
  points: number;
  pointsAgainst: number;
  pointsFastBreak: number;
  pointsFromTurnovers: number;
  pointsInThePaint: number;
  pointsInThePaintAttempted: number;
  pointsInThePaintMade: number;
  pointsInThePaintPercentage: number;
  pointsSecondChance: number;
  reboundsDefensive: number;
  reboundsOffensive: number;
  reboundsPersonal: number;
  reboundsTeam: number;
  reboundsTeamDefensive: number;
  reboundsTeamOffensive: number;
  reboundsTotal: number;
  secondChancePointsAttempted: number;
  secondChancePointsMade: number;
  secondChancePointsPercentage: number;
  steals: number;
  threePointersAttempted: number;
  threePointersMade: number;
  threePointersPercentage: number;
  timeLeading: string;
  timesTied: number;
  trueShootingAttempts: number;
  trueShootingPercentage: number;
  turnovers: number;
  turnoversTeam: number;
  turnoversTotal: number;
  twoPointersAttempted: number;
  twoPointersMade: number;
  twoPointersPercentage: number;
};

export type BoxScoreTeam = {
  inBonus: string;
  periods: Period[];
  players: BoxScorePlayer[];
  score: number;
  statistics: BoxScoreStatistics;
  teamCity: string;
  teamId: number;
  teamName: string;
  teamTricode: string;
  timeoutsRemaining: number;
};

type Official = {
  assignment: string;
  familyName: string;
  firstName: string;
  jerseyNum: string;
  name: string;
  nameI: string;
  personId: number;
};

type BoxScore = {
  arena: Arena;
  attendance: number;
  awayTeam: BoxScoreTeam;
  duration: number;
  gameClock: string;
  gameCode: string;
  gameEt: string;
  gameId: string;
  gameStatus: number;
  gameStatusText: string;
  gameTimeAway: string;
  gameTimeHome: string;
  gameTimeLocal: string;
  gameTimeUTC: string;
  homeTeam: BoxScoreTeam;
  officials: Official[];
  period: number;
  regulationPeriods: number;
  sellout: string;
};

type Meta = {
  code: number;
  request: string;
  time: string;
  version: number;
};

export type BoxScoreResponse = {
  game: BoxScore;
  meta: Meta;
};

export type BoxScoreResponseDto = {
  awayTeam: BoxScoreTeam;
  homeTeam: BoxScoreTeam;
};
