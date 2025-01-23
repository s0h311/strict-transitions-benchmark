export type FilterState = {
  searchQuery: string | null
}

type Product = {
  id: number
  title: string
  description: string
  price: number
  rating: number
  stock: number
  tags: string[]
}

export type FilterAction = {
  type: 'filter/search'
  payload: string | null
}

export const filterFeature = 'filter'
export const filterSlice = 'filters'

export const filterInitialState: FilterState = {
  searchQuery: null,
}

export function filterReducer(state: FilterState = filterInitialState, action: FilterAction): FilterState {
  switch (action.type) {
    case 'filter/search': {
      return {
        ...state,
        searchQuery: action.payload,
      }
    }
    default: {
      return state
    }
  }
}

export const selectFilter = (state) => state[filterSlice]
