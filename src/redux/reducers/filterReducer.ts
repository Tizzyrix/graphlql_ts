import {FILTER} from '../types'

const initialState = {
    category: 'rockets',
    search: '',
}

export default function filterReducer (state = initialState, action: any) {
    switch(action.type) {
        case FILTER.CATEGORY_CHANGE: {
            const {value} = action.payload
            return {...state, category: value}
        }
        default:
            return state
    }
}