import { legacy_createStore as createStore } from 'redux'
import { productFeature, productInitialState, productReducer, ProductState } from './productStore'
import { filterFeature, filterInitialState, filterReducer, FilterState } from './filterStore'

type State = {
  products: ProductState
  filters: FilterState
}

const initialState: State = {
  products: productInitialState,
  filters: filterInitialState,
}

function rootReducer(state: State = initialState, action): State {
  const feature = action.type.split('/')[0]

  switch (feature) {
    case productFeature: {
      return {
        ...state,
        products: productReducer(state.products, action),
      }
    }
    case filterFeature: {
      return {
        ...state,
        filters: filterReducer(state.filters, action),
      }
    }
    default: {
      return state
    }
  }
}

let devTools = undefined

if ('__REDUX_DEVTOOLS_EXTENSION__' in window && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === 'function') {
  devTools = window.__REDUX_DEVTOOLS_EXTENSION__()
}

export default createStore(rootReducer, devTools)
