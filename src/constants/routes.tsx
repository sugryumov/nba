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
};