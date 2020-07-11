import { createAction } from 'redux-act'
import { TFirebaseUserData } from './reducer'

export const firebaseLoginRequest = createAction<{ email: string; password: string }>(
  'firebaseLoginRequest'
)
export const firebaseLoginSuccess = createAction('firebaseLoginSuccess')
export const firebaseLoginError = createAction('firebaseLoginError')
export const firebaseSetUser = createAction<{ userData: TFirebaseUserData }>('setFirebaseUser')
export const firebaseRemoveUser = createAction('firebaseRemoveUser')
export const firebaseAuthenticateRequest = createAction('firebaseAuthenticateUser')
export const firebaseAuthenticateSuccess = createAction('firebaseAuthenticateSuccess')
export const firebaseAuthenticateFailure = createAction('firebaseAuthenticateFailure')
export const firebaseLogout = createAction('firebaseLogout')
export const firebaseLogoutSuccess = createAction('firebaseLogoutSuccess')
export const firebaseLogoutError = createAction('firebaseLogoutError')
