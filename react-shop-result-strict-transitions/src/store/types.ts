import { ProductState } from './product/type.ts'
import { FilterState } from './filter/type.ts'
import { productInitialState, productSlice } from './product/store.ts'
import { filterInitialState, filterSlice } from './filter/store.ts'

export type RootState = {
  products: ProductState
  filters: FilterState
}

export const initialState: RootState = {
  [productSlice]: productInitialState,
  [filterSlice]: filterInitialState,
}
