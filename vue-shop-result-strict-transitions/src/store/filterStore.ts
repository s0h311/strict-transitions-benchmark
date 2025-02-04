import { defineStore } from 'pinia'
import { createTransitions } from '../../../strict-transitions/pinia/createTransitions'

export type FilterState = {
  searchQuery: string | null
  maxPrice: number
  minRating: number
  onlyInStock: boolean
  tags: string[]
}

export const filterTransitions = createTransitions([
  {
    identityFn: (state: FilterState) => !!state,
    actions: ['updateSearchQuery', 'updateMaxPrice', 'updateMinRating', 'updateOnlyInStock', 'updateTags'],
  },
])

export const filterStoreId = 'filter'

export const useFilterStore = defineStore(filterStoreId, {
  state: (): FilterState => ({
    searchQuery: null,
    maxPrice: Infinity,
    minRating: -Infinity,
    onlyInStock: false,
    tags: [],
  }),
  actions: {
    updateSearchQuery(searchQuery: FilterState['searchQuery']) {
      this.searchQuery = searchQuery
    },
    updateMaxPrice(maxPrice: FilterState['maxPrice']) {
      this.maxPrice = Number.isNaN(maxPrice) ? Infinity : maxPrice
    },
    updateMinRating(minRating: FilterState['minRating']) {
      this.minRating = Number.isNaN(minRating) ? -Infinity : minRating
    },
    updateOnlyInStock(onlyInStock: FilterState['onlyInStock']) {
      this.onlyInStock = onlyInStock
    },
    updateTags(tags: FilterState['tags']) {
      this.tags = tags
    },
  },
})
