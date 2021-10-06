import { createStore, combineReducers } from 'redux'

import filterReducer from './reducers/filterReducer'
import authReducer from './reducers/authReducer'

const rootReducer = combineReducers({
    filter: filterReducer,
    auth: authReducer
})
// Оставил js, т.к. тайпскрипт ругается на такой способ подключения девтулзов 
export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )