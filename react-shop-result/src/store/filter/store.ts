import { FilterState } from './type.ts'

export const filterFeature = 'filter'
export const filterSlice = 'filters'

export const filterInitialState: FilterState = {
  searchQuery: null,
  maxPrice: Infinity,
  minRating: -Infinity,
  onlyInStock: false,
  tags: [],
}
