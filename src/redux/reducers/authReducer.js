import {AUTH} from '../types'

const initialState = {
    isLoggedIn: false
}

export default function authReducer (state = initialState, action) {
    switch(action.type) {
        case AUTH.LOG_IN: {
            return {...state, isLoggedIn: true}
        }
        default: 
            return state
    }
}