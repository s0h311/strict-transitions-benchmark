import './ProductList.css'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductState, selectProducts, visibleProducts } from '../store/productStore'
import ProductCard from './ProductCard'

export default function ProductList() {
  const dispatch = useDispatch()

  const fetchProducts = useCallback(() => {
    dispatch({
      type: 'product/fetch',
    })

    const fields = ['id', 'title', 'description', 'price', 'rating', 'stock', 'tags']

    const url = `https://dummyjson.com/products?limit=10&skip=10&select=${fields.join(',')}`

    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: 'product/fetch-successful',
          payload: res['products'],
        })
      })
  }, [dispatch])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const products: ProductState = useSelector(visibleProducts)

  return (
    <ul className="product-list">
      {Array.isArray(products) &&
        products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
    </ul>
  )
}
