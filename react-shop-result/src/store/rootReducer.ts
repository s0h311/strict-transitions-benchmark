import { productFeature } from './product/store.ts'
import { productReducer } from './product/reducer.ts'
import { filterFeature } from './filter/store.ts'
import { filterReducer } from './filter/reducer.ts'
import { initialState, RootState } from './types.ts'

export function rootReducer(state: RootState = initialState, action): RootState {
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
