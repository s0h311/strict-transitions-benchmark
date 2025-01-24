import { productInitialState } from '../productStore.ts'
import { ProductAction, ProductState } from './type.ts'

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
