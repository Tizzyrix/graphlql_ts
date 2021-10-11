type routeTypes = {
  home: string;
  search: string;
  itemInfo: string;
  auth: string;
  any: string;
};

export const ROUTES: routeTypes = {
  home: '/',
  search: '/search',
  itemInfo: '/details/:id',
  auth: '/auth',
  any: '*',
};
