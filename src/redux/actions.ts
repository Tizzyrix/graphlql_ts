import { AuthActionTypes, AuthAction} from '../redux/types/authTypes'
import { FilterActionTypes, fitlerAction } from '../redux/types/filterTypes'
import { EFilterCategoriesAll } from '../types/types'

export function changeFilterOptions(key: string, value: EFilterCategoriesAll): fitlerAction {
    switch(key) {
        case 'category': {
            return({type: FilterActionTypes.CATEGORY_CHANGE, payload: value })
        }
        default:
            console.log('error in changeFilterOption action creator')
    }
}

export function LogInAction (): AuthAction {
    return({type: AuthActionTypes.LOG_IN})
}