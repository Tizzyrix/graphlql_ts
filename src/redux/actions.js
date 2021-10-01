import {FILTER, ITEM_LIST, AUTH} from './types'
import {FILTER_VAR} from '../utils/utils'

export function changeFilterOptions(key, value) {
    switch(key) {
        case 'category': {
            return({type: FILTER.CATEGORY_CHANGE, payload: {value} })
        }
    }
}

export function LogInAction () {
    return({type: AUTH.LOG_IN})
}