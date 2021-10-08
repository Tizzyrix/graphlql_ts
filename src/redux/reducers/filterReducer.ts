import { EFilterCategoriesAll } from '../../types/types'
import {IFilterState, FilterActionTypes, fitlerAction} from '../types/filterTypes'

const initialState: IFilterState = {
    category: EFilterCategoriesAll.rockets,
}

export default function filterReducer (state = initialState, action: fitlerAction) {
    switch(action.type) {
        case FilterActionTypes.CATEGORY_CHANGE: {
            return { ...state, category: action.payload }
        }
        default:
            return state
    }
}