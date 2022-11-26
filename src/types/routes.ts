enum RoutesName {
  SCOREBOARD = 'SCOREBOARD',
  BOX_SCORE = 'BOX_SCORE',
}

export type Route = {
  PATH: string;
  NAME: string;
};

export type Routes = {
  [key in RoutesName]: Route;
};
