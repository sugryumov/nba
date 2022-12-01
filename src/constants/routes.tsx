import { Routes } from '@/types/routes';
const ROUTE_PREF = '/nba';

export const ROUTES: Routes = {
  GAMES: {
    PATH: `${ROUTE_PREF}/`,
    NAME: 'GAMES',
  },
  STANDINGS: {
    PATH: `${ROUTE_PREF}/standings`,
    NAME: 'STANDINGS',
  },
};
