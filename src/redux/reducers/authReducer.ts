import { IAuthState, AuthAction, AuthActionTypes } from '../types/authTypes';

const initialState: IAuthState = {
  isLoggedIn: false,
};

export default function authReducer(state = initialState, action: AuthAction) {
  switch (action.type) {
    case AuthActionTypes.LOG_IN: {
      return { ...state, isLoggedIn: true };
    }
    default:
      return state;
  }
}
