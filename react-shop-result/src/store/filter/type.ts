export type FilterState = {
  searchQuery: string | null
  maxPrice: number | null
  minRating: number | null
  onlyInStock: boolean
  tags: string[] | null
}

export type FilterAction =
  | {
      type: 'filter/search'
      payload: string | null
    }
  | {
      type: 'filter/maxPrice'
      payload: number
    }
  | {
      type: 'filter/minRating'
      payload: number
    }
  | {
      type: 'filter/onlyInStock'
      payload: boolean
    }
  | {
      type: 'filter/tags'
      payload: string[]
    }
