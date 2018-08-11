import { call, put, takeLatest } from 'redux-saga/effects'
import { FETCH_COOL_STATUS } from './example.constants'
import { updateCoolStatus } from './example.actions'
import { getCoolStatus } from './example.dataservice'

function * fetchCoolStatusFlow () {
  try {
    const response = yield call(getCoolStatus)

    yield put(updateCoolStatus(response.cool))
  } catch (err) {
    console.log('* problem in the fetchCoolStatusFlow()', err)
  }
}

export default function * root () {
  yield takeLatest(FETCH_COOL_STATUS, fetchCoolStatusFlow)
}
