export interface IAuthState {
    isLoggedIn: boolean
}

export enum AuthActionTypes {
    LOG_IN = 'LOG_IN'
}

interface logInAction {
    type: AuthActionTypes.LOG_IN
}

export type AuthAction = logInAction