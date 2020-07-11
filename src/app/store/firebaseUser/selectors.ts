import { TStore } from '..'

export const firebasaeLoginStatus = (state: TStore) => state.firebaseUser.loginStatus
export const firebasaeUserIsAuthenticated = (state: TStore) => state.firebaseUser.isAuthenticated
