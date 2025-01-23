import { legacy_createStore as createStore } from 'redux'
import { ProductState, productFeature, productInitialState, productReducer } from './productStore'
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

const rootStore = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default rootStore
