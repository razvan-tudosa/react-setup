import { all } from 'redux-saga/effects'

import exampleSaga from './example/example.saga.js'

export default function * root () {
  yield all([
    exampleSaga()
  ])
}
