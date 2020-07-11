import { all, fork } from 'redux-saga/effects'
import { firebaseUser } from './firebaseUser/sagas'

export default function* rootSaga() {
  yield all([fork(firebaseUser)])
}
