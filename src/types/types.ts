import { ApolloError } from '@apollo/client';

export interface IRocketInfo {
  country: string;
  description: string;
  id: string;
  name: string;
  type: string;
  active: string;
}

export interface IShipInfo {
  class: string;
  id: string;
  image: string;
  model: string;
  name: string;
  type: string;
}

export interface IUser {
  name: string;
  rocket: string;
  id: string;
}

export type CustomHookResult<T> = {
  loading: boolean;
  data: T;
  error: ApolloError;
};

export type Ship = {
  id: string;
  name: string;
  image: string;
};

export type Rocket = {
  id: string;
  name: string;
};

export type DataShips = {
  ships: Ship[];
};

export type DataRockets = {
  rockets: Rocket[];
};

export enum EFilterCategoriesAll {
  ships = 'ships',
  rockets = 'rockets',
}
