/* eslint-disable no-unused-vars */
enum RoutesName {
  GAMES = 'GAMES',
  STANDINGS = 'STANDINGS',
  BOX_SCORE = 'BOX_SCORE',
  PLAY_BY_PLAY = 'PLAY_BY_PLAY',
}

export type Route = {
  PATH: string;
  NAME?: string;
  IS_MENU_ITEM: boolean;
};

export type Routes = {
  [key in RoutesName]: Route;
};
