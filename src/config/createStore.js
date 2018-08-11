import { compose, createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../App.reducer.js'
import rootSaga from '../App.saga.js'

const config = {
  showLogger: true
}

const sagaMiddleware = createSagaMiddleware()

export default (preloadedState) => {
  const middlewares = [sagaMiddleware]

  if (config.showLogger) {
    middlewares.push(logger)
  }

  const middlewaresEnhancers = applyMiddleware(...middlewares)

  const enhancers = [middlewaresEnhancers]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  sagaMiddleware.run(rootSaga)

  return store
}
