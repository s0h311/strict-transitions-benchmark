import { ProductAction, ProductState } from './type.ts'
import { productInitialState } from './store.ts'

export function productReducer(state: ProductState = productInitialState, action: ProductAction): ProductState {
  switch (action.type) {
    case 'product/fetch': {
      return 'fetching'
    }
    case 'product/fetch-successful': {
      return action.payload
    }
    case 'product/fetch-failed': {
      return action.payload
    }
    default: {
      return state
    }
  }
}
