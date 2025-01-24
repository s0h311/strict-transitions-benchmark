import { legacy_createStore as createStore } from 'redux'
import { rootReducer } from './rootReducer.ts'

let devTools = undefined

if ('__REDUX_DEVTOOLS_EXTENSION__' in window && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function') {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export default createStore(rootReducer, devTools)
