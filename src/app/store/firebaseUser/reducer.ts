import { createReducer } from 'redux-act'
import {
  firebaseLoginError,
  firebaseLoginRequest,
  firebaseLoginSuccess,
  firebaseRemoveUser,
  firebaseSetUser,
  firebaseAuthenticateRequest,
  firebaseAuthenticateSuccess,
  firebaseAuthenticateFailure,
  firebaseLogout,
  firebaseLogoutSuccess,
  firebaseLogoutError,
} from './actions'

export enum TFirebaseLoginStatus {
  LOGOUT = 'LOGOUT',
  IN_PROGRESS = 'IN_PROGRESS',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  CANCELED = 'CANCELED',
}

export type TFirebaseUserData = {
  email: string | null
  displayName: string | null
  creationTime?: string
  lastSignInTime?: string
  photoURL?: string | null
}

export type TFirebaseUserState = {
  userData: TFirebaseUserData | null
  loginStatus: TFirebaseLoginStatus
  isAuthenticated: boolean | undefined
}

const defaultState = {
  userData: null,
  loginStatus: TFirebaseLoginStatus.LOGOUT,
  isAuthenticated: undefined,
}

export const firebaseUserReducer = createReducer<TFirebaseUserState>({}, defaultState)

firebaseUserReducer
  .on(firebaseAuthenticateRequest, (state) => ({
    ...state,
    isAuthenticated: state.isAuthenticated,
  }))
  .on(firebaseAuthenticateSuccess, (state) => ({ ...state, isAuthenticated: true }))
  .on(firebaseAuthenticateFailure, (state) => ({ ...state, isAuthenticated: false }))
  .on(firebaseLoginRequest, (state) => ({
    ...state,
    loginStatus: TFirebaseLoginStatus.IN_PROGRESS,
  }))
  .on(firebaseLoginSuccess, (state) => ({ ...state, loginStatus: TFirebaseLoginStatus.SUCCESS }))
  .on(firebaseLoginError, (state) => ({ ...state, loginStatus: TFirebaseLoginStatus.ERROR }))
  .on(firebaseSetUser, (state, { userData }) => ({ ...state, isAuthenticated: true, userData }))
  .on(firebaseLogout, (state) => ({ ...state }))
  .on(firebaseLogoutSuccess, (state) => ({
    ...state,
    isAuthenticated: false,
    loginStatus: TFirebaseLoginStatus.LOGOUT,
  }))
  .on(firebaseLogoutError, (state) => ({ ...state, loginStatus: TFirebaseLoginStatus.ERROR }))
  .on(firebaseRemoveUser, () => ({ ...defaultState, isAuthenticated: false }))
