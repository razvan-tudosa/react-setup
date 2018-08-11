import { UPDATE_COOL_STATUS } from './example.constants'

const initialState = {
  allCool: false
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case UPDATE_COOL_STATUS:
      return {
        ...state,
        allCool: action.payload.flag
      }
    default:
      return state
  }
}
