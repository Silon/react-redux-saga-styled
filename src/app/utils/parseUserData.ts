import { TFirebaseUserData } from '../store/firebaseUser/reducer'

export function parseUserData(user: firebase.User): TFirebaseUserData {
  return {
    email: user.email,
    displayName: user.displayName,
    creationTime: user.metadata.creationTime,
    lastSignInTime: user.metadata.lastSignInTime,
    photoURL: user.photoURL,
  }
}
