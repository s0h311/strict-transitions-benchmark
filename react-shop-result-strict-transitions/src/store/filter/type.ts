export type FilterState = {
  searchQuery: string | null
  maxPrice: number
  minRating: number
  onlyInStock: boolean
  tags: string[]
}

export type FilterAction =
  | {
      type: 'filter/search'
      payload: FilterState['searchQuery']
    }
  | {
      type: 'filter/maxPrice'
      payload: FilterState['maxPrice']
    }
  | {
      type: 'filter/minRating'
      payload: FilterState['minRating']
    }
  | {
      type: 'filter/onlyInStock'
      payload: FilterState['onlyInStock']
    }
  | {
      type: 'filter/tags'
      payload: FilterState['tags']
    }
