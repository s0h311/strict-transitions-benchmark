import { createTransitions } from '../../../../strict-transitions/redux'
import { filterSlice } from './store.ts'

export const filterTransitions = createTransitions([
  {
    identityFn: (rootState: any) => !!rootState[filterSlice],
    actionTypes: ['filter/search', 'filter/maxPrice', 'filter/minRating', 'filter/onlyInStock', 'filter/tags'],
  },
])
