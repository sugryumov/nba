import { Routes } from '@/types/routes';
const ROUTE_PREF = '/nba';

export const ROUTES: Routes = {
  GAMES: {
    PATH: `${ROUTE_PREF}/`,
    NAME: 'GAMES',
    IS_MENU_ITEM: true,
  },
  STANDINGS: {
    PATH: `${ROUTE_PREF}/standings`,
    NAME: 'STANDINGS',
    IS_MENU_ITEM: true,
  },
  BOX_SCORE: {
    PATH: `${ROUTE_PREF}/box-score`,
    IS_MENU_ITEM: false,
  },
  PLAY_BY_PLAY: {
    PATH: `${ROUTE_PREF}/play-by-play`,
    IS_MENU_ITEM: false,
  },
  SHOT_CHART: {
    PATH: `${ROUTE_PREF}/shot-chart`,
    IS_MENU_ITEM: false,
  },
};
