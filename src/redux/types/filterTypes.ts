import { EFilterCategoriesAll } from '../../types/types';

export interface IFilterState {
  category: EFilterCategoriesAll;
}

export enum FilterActionTypes {
  CATEGORY_CHANGE = 'CATEGORY_CHANGE',
}

interface ICategoryChangeAction {
  type: FilterActionTypes.CATEGORY_CHANGE;
  payload: EFilterCategoriesAll;
}

export type fitlerAction = ICategoryChangeAction;
