/* eslint-disable no-unused-vars */
enum RoutesName {
  GAMES = 'GAMES',
  GAME_INFO = 'GAME_INFO',
  STANDINGS = 'STANDINGS',
  SHOT_CHART = 'SHOT_CHART',
}

export type Route = {
  PATH: string;
  NAME?: string;
  IS_MENU_ITEM: boolean;
};

export type Routes = {
  [key in RoutesName]: Route;
};
