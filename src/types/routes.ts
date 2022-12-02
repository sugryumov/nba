enum RoutesName {
  GAMES = 'GAMES',
  STANDINGS = 'STANDINGS',
  BOX_SCORE = 'BOX_SCORE',
}

export type Route = {
  PATH: string;
  NAME?: string;
  IS_MENU_ITEM: boolean;
};

export type Routes = {
  [key in RoutesName]: Route;
};
