import { combineReducers } from 'redux'
import exampleReducer from './example/example.reducer'

export default combineReducers({
  example: exampleReducer
})
