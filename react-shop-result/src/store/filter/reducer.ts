import { filterInitialState } from './store.ts'
import { FilterAction, FilterState } from './type.ts'

export function filterReducer(state: FilterState = filterInitialState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'filter/search': {
      return {
        ...state,
        searchQuery: action.payload,
      }
    }
    case 'filter/maxPrice': {
      return {
        ...state,
        maxPrice: action.payload,
      }
    }
    case 'filter/minRating': {
      return {
        ...state,
        minRating: action.payload,
      }
    }
    case 'filter/onlyInStock': {
      return {
        ...state,
        onlyInStock: action.payload,
      }
    }
    case 'filter/tags': {
      return {
        ...state,
        tags: action.payload,
      }
    }
    default: {
      return state
    }
  }
}
