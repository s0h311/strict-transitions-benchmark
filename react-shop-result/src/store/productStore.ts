export type ProductState = 'not-fetched' | 'fetching' | Product[] | Error

export type ProductAction =
  | {
      type: 'product/fetch'
    }
  | {
      type: 'product/fetch-successful'
      payload: Product[]
    }
  | {
      type: 'product/fetch-failed'
      payload: Error
    }

export const productFeature = 'product'
export const productSlice = 'products'

export type Product = {
  id: number
  title: string
  description: string
  price: number
  rating: number
  stock: number
  tags: string[]
}

export const productInitialState: ProductState = 'not-fetched'

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

export const selectProducts = (state) => state[productSlice]
