import { rootReducer } from './rootReducer.ts'
import { createTransitionStore } from '../../../strict-transitions/redux'
import { rootTransitions } from './rootTransitions.ts'

let devTools = undefined

if ('__REDUX_DEVTOOLS_EXTENSION__' in window && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function') {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

// @ts-expect-error
export default createTransitionStore(rootTransitions, rootReducer, devTools)
