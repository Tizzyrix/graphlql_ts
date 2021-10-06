import { FILTER, AUTH}  from './types'

export function changeFilterOptions(key: string, value: string) {
    switch(key) {
        case 'category': {
            return({type: FILTER.CATEGORY_CHANGE, payload: {value} })
        }
        default:
            console.log('error in changeFilterOption action creator')
    }
}

export function LogInAction () {
    return({type: AUTH.LOG_IN})
}