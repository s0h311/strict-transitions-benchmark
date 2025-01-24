import { createSelector } from 'reselect'
import { selectFilter } from '../filter/selectors.ts'
import { Product } from './type.ts'
import { productSlice } from './store.ts'

export const selectProducts = (state): Product[] => state[productSlice]

export const visibleProducts = createSelector([selectProducts, selectFilter], (products, filters): Product[] => {
  if (!Array.isArray(products)) {
    return products
  }

  if (!filters.searchQuery) {
    return products
  }

  return products.filter((product) => product.title.toLowerCase().includes(filters.searchQuery.toLowerCase()))
})

export const selectProductTags = createSelector([selectProducts], (products): string[] => {
  if (!Array.isArray(products)) {
    return []
  }

  return [...new Set(products.flatMap(({ tags }) => tags))]
})
