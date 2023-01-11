import { Routes } from '@/types/routes';
const ROUTE_PREF = '/nba';

export const ROUTES: Routes = {
  GAMES: {
    PATH: `${ROUTE_PREF}/`,
    NAME: 'GAMES',
    IS_MENU_ITEM: true,
  },
  GAME_INFO: {
    PATH: `${ROUTE_PREF}/game-info`,
    IS_MENU_ITEM: false,
  },
  STANDINGS: {
    PATH: `${ROUTE_PREF}/standings`,
    NAME: 'STANDINGS',
    IS_MENU_ITEM: true,
  },
  SHOT_CHART: {
    PATH: `${ROUTE_PREF}/shot-chart`,
    IS_MENU_ITEM: false,
  },
};
