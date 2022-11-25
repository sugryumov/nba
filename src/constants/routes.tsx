export type Route = {
  PATH: string;
  NAME: string;
};

enum RoutesName {
  SCOREBOARD = 'SCOREBOARD',
  BOX_SCORE = 'BOX_SCORE',
}

type Routes = {
  [key in RoutesName]: Route;
};

export const ROUTES: Routes = {
  SCOREBOARD: {
    PATH: '/',
    NAME: 'SCOREBOARD',
  },
  BOX_SCORE: {
    PATH: '/box-score',
    NAME: 'BOX_SCORE',
  },
};
