import { createStore, combineReducers } from 'redux';

import filterReducer from './reducers/filterReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  filter: filterReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export type RootState = ReturnType<typeof rootReducer>;
