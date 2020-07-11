import { put, call, takeLatest } from 'redux-saga/effects'
import {
  firebaseAuthenticateFailure,
  firebaseAuthenticateRequest,
  firebaseAuthenticateSuccess,
  firebaseLoginError,
  firebaseLoginRequest,
  firebaseLoginSuccess,
  firebaseRemoveUser,
  firebaseSetUser,
  firebaseLogout,
  firebaseLogoutSuccess,
  firebaseLogoutError,
} from './actions'
import { loginUser } from '../../firebase/authenticaton'
import { firebaseAuth } from '../../firebase/firebase'
import { parseUserData } from '../../utils/parseUserData'
import { push } from 'connected-react-router'

function* loginFlow({ payload: { email, password } }: any) {
  try {
    const { user } = yield call(loginUser, { email, password })
    if (user) {
      yield put(firebaseLoginSuccess())
      yield put(
        firebaseSetUser({
          userData: {
            email: user.email,
            displayName: user.displayName,
            creationTime: user.metadata.creationTime,
            lastSignInTime: user.metadata.lastSignInTime,
            photoURL: user.photoURL,
          },
        })
      )
      yield put(push('/'))
    } else {
      throw new Error('Somehting went wrong')
    }
  } catch (err) {
    yield put(firebaseLoginError())
  }
}

function* logoutFlow() {
  try {
    yield call(firebaseSignOut)
    yield put(firebaseRemoveUser())
    yield put(firebaseLogoutSuccess())
    yield put(push('/login'))
  } catch (err) {
    yield put(firebaseLogoutError())
  }
}

function* authenticateFlow() {
  const user = yield call(firebaseAuthStateChanged)
  if (user) {
    const userData = parseUserData(user)
    yield put(firebaseSetUser({ userData }))
    yield put(push('/'))
    yield put(firebaseAuthenticateSuccess())
  } else {
    yield put(firebaseRemoveUser())
    yield put(push('/login'))
    yield put(firebaseAuthenticateFailure())
  }
}

function firebaseAuthStateChanged() {
  return new Promise((resolve) => {
    firebaseAuth.onAuthStateChanged((user) => {
      // TODO: Handle reject
      resolve(user || null)
    })
  })
}

function firebaseSignOut() {
  return new Promise((resolve) => {
    firebaseAuth
      .signOut()
      .then(() => {
        resolve()
      })
      .catch(() => {
        // TODO: Handle reject
        resolve()
      })
  })
}

export function* firebaseUser() {
  yield takeLatest(firebaseLoginRequest, loginFlow)
  yield takeLatest(firebaseAuthenticateRequest, authenticateFlow)
  yield takeLatest(firebaseLogout, logoutFlow)
}
