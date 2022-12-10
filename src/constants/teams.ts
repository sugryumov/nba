type TTeams = {
  [key: string]: string;
};

export const TEAMS: TTeams = {
  ATL: 'ATL',
  BKN: 'BKN',
  BOS: 'BOS',
  CHA: 'CHA',
  CHI: 'CHI',
  CLE: 'CLE',
  DAL: 'DAL',
  DEN: 'DEN',
  DET: 'DET',
  GSW: 'GSW',
  HOU: 'HOU',
  IND: 'IND',
  LAC: 'LAC',
  LAL: 'LAL',
  MEM: 'MEM',
  MIA: 'MIA',
  MIL: 'MIL',
  MIN: 'MIN',
  NOP: 'NOP',
  NYK: 'NYK',
  OKC: 'OKC',
  ORL: 'ORL',
  PHI: 'PHI',
  PHX: 'PHX',
  POR: 'POR',
  SAC: 'SAC',
  SAS: 'SAS',
  TOR: 'TOR',
  UTA: 'UTA',
  WAS: 'WAS',
  NBA: 'NBA',
};

export const TEAM_FULL_NAMES: TTeams = {
  ATL: 'Atlanta Hawks',
  BKN: 'Brooklyn Nets',
  BOS: 'Boston Celtics',
  CHA: 'Charlotte Hornets',
  CHI: 'Chicago Bulls',
  CLE: 'Cleveland Cavaliers',
  DAL: 'Dallas Mavericks',
  DEN: 'Denver Nuggets',
  DET: 'Detroit Pistons',
  GSW: 'Golden State Warriors',
  HOU: 'Houston Rockets',
  IND: 'Indiana Pacers',
  LAC: 'LA Clippers',
  LAL: 'Los Angeles Lakers',
  MEM: 'Memphis Grizzlies',
  MIA: 'Miami Heat',
  MIL: 'Milwaukee Bucks',
  MIN: 'Minnesota Timberwolves',
  NOP: 'New Orleans Pelicans',
  NYK: 'New York Knicks',
  OKC: 'Oklahoma City Thunder',
  ORL: 'Orlando Magic',
  PHI: 'Philadelphia 76ers',
  PHX: 'Phoenix Suns',
  POR: 'Portland Trail Blazers',
  SAC: 'Sacramento Kings',
  SAS: 'San Antonio Spurs',
  TOR: 'Toronto Raptors',
  UTA: 'Utah Jazz',
  WAS: 'Washington Wizards',
};

export const TEAM_NAMES: TTeams = {
  ATL: 'Hawks',
  BKN: 'Nets',
  BOS: 'Celtics',
  CHA: 'Hornets',
  CHI: 'Bulls',
  CLE: 'Cavaliers',
  DAL: 'Mavericks',
  DEN: 'Nuggets',
  DET: 'Pistons',
  GSW: 'Warriors',
  HOU: 'Rockets',
  IND: 'Pacers',
  LAC: 'Clippers',
  LAL: 'Lakers',
  MEM: 'Grizzlies',
  MIA: 'Heat',
  MIL: 'Bucks',
  MIN: 'Timberwolves',
  NOP: 'Pelicans',
  NYK: 'Knicks',
  OKC: 'Thunder',
  ORL: 'Magic',
  PHI: '76ers',
  PHX: 'Suns',
  POR: 'Trail Blazers',
  SAC: 'Kings',
  SAS: 'Spurs',
  TOR: 'Raptors',
  UTA: 'Jazz',
  WAS: 'Wizards',
  NBA: 'NBA',
};

export const TEAM_ABBR: TTeams = Object.entries(TEAM_NAMES).reduce(
  (acc, [abbr, name]) => ({
    ...acc,
    [name]: abbr,
  }),
  {},
);