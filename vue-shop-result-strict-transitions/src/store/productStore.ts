import { defineStore } from 'pinia'
import type { Product } from './types.ts'
import { useFilterStore } from './filterStore.ts'

export type ProductState = {
  products: 'not-fetched' | 'fetching' | Product[] | Error
}

export const useProductStore = defineStore('product', {
  state: (): ProductState => ({
    products: 'not-fetched',
  }),
  getters: {
    visibleProducts({ products }): Product[] {
      const filterStore = useFilterStore()

      if (!Array.isArray(products)) {
        return []
      }

      let filteredProducts = searchFilter(products, filterStore.searchQuery)
      filteredProducts = maxPriceFilter(filteredProducts, filterStore.maxPrice)
      filteredProducts = minRatingFilter(filteredProducts, filterStore.minRating)
      filteredProducts = onlyInStockFilter(filteredProducts, filterStore.onlyInStock)
      filteredProducts = tagsFilter(filteredProducts, filterStore.tags)

      return filteredProducts
    },
    tags({ products }): string[] {
      if (!Array.isArray(products)) {
        return []
      }

      return [...new Set(products.flatMap(({ tags }) => tags))]
    },
  },
  actions: {
    fetch() {
      fetch('http://localhost:4000/api/data.json')
        .then((res) => res.json())
        .then((res) => (this.products = res['products']))
        .catch((error) => (this.products = error))
    },
  },
})

function searchFilter(products: Product[], searchQuery: string | null): Product[] {
  if (!searchQuery) {
    return products
  }

  return products.filter((product) => product.title.toLowerCase().includes(searchQuery.toLowerCase()))
}

function maxPriceFilter(products: Product[], maxPrice: number): Product[] {
  return products.filter(({ price }) => price <= maxPrice)
}

function minRatingFilter(products: Product[], minRating: number): Product[] {
  return products.filter(({ rating }) => rating >= minRating)
}

function onlyInStockFilter(products: Product[], onlyInStock: boolean): Product[] {
  const minInStock = onlyInStock ? 1 : 0
  return products.filter(({ stock }) => stock >= minInStock)
}

function tagsFilter(products: Product[], tags: string[]): Product[] {
  if (tags.length === 0) {
    return products
  }

  return products.filter(({ tags: currentTags }) => {
    return currentTags.some((currentTag) => tags.includes(currentTag))
  })
}
