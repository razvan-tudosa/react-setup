import { makeActionCreator } from '../common/utils'
import {
  FETCH_COOL_STATUS,
  UPDATE_COOL_STATUS
} from './example.constants'

export const updateCoolStatus = makeActionCreator(UPDATE_COOL_STATUS, 'flag')
export const fetchCoolStatus = makeActionCreator(FETCH_COOL_STATUS)
