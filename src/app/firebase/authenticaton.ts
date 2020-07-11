import { firebaseAuth } from './firebase'

export type TLoginUserData = {
  email: string
  password: string
}

export const loginUser = async ({ email, password }: TLoginUserData) =>
  await firebaseAuth.signInWithEmailAndPassword(email, password)

export const logoutUser = async () => await firebaseAuth.signOut()
