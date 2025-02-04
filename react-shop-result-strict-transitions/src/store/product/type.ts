export type Product = {
  id: number
  title: string
  description: string
  price: number
  rating: number
  stock: number
  tags: string[]
}

export type ProductState = 'not-fetched' | 'fetching' | Product[] | Error

export type ProductAction =
  | {
      type: 'product/fetch'
    }
  | {
      type: 'product/fetch-successful'
      payload: Product[]
    }
  | {
      type: 'product/fetch-failed'
      payload: Error
    }
