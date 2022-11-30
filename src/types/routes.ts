enum RoutesName {
  GAMES = 'GAMES',
  STANDINGS = 'STANDINGS',
}

export type Route = {
  PATH: string;
  NAME: string;
};

export type Routes = {
  [key in RoutesName]: Route;
};
