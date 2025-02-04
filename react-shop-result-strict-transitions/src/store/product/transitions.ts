import { createTransitions } from '../../../../strict-transitions/redux'
import { productSlice } from './store.ts'

export const productTransitions = createTransitions([
  {
    identityFn: (rootState: any) => rootState[productSlice] === 'not-fetched',
    actionTypes: ['product/fetch'],
  },
  {
    identityFn: (rootState: any) => rootState[productSlice] === 'fetching',
    actionTypes: ['product/fetch-successful', 'product/fetch-failed'],
  },
])
