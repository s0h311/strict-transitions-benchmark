import { createSelector } from 'reselect'
import { selectFilter } from '../filter/selectors.ts'
import { Product, ProductState } from './type.ts'
import { productSlice } from './store.ts'

export const selectProducts = ({ products }: { [productSlice]: ProductState }) => products

export const selectVisibleProducts = createSelector(
  [selectProducts, selectFilter],
  (products, { searchQuery, maxPrice, minRating, onlyInStock, tags }): Product[] => {
    if (!Array.isArray(products)) {
      return []
    }

    let filteredProducts = searchFilter(products, searchQuery)
    filteredProducts = maxPriceFilter(filteredProducts, maxPrice)
    filteredProducts = minRatingFilter(filteredProducts, minRating)
    filteredProducts = onlyInStockFilter(filteredProducts, onlyInStock)
    filteredProducts = tagsFilter(filteredProducts, tags)

    return filteredProducts
  }
)

export const selectProductTags = createSelector([selectProducts], (products): string[] => {
  if (!Array.isArray(products)) {
    return []
  }

  return [...new Set(products.flatMap(({ tags }) => tags))]
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
