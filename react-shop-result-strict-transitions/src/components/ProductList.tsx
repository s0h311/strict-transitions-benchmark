import './ProductList.css'
import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import { ProductState } from '../store/product/type.ts'
import { selectVisibleProducts } from '../store/product/selectors.ts'

export default function ProductList() {
  const dispatch = useDispatch()

  const fetchProducts = useCallback(() => {
    dispatch({
      type: 'product/fetch',
    })

    fetch('http://localhost:4000/api/data.json')
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: 'product/fetch-successful',
          payload: res['products'],
        })
      })
      .catch((error) => {
        dispatch({
          type: 'product/fetch-failed',
          payload: error,
        })
      })
  }, [dispatch])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  const products: ProductState = useSelector(selectVisibleProducts)

  return (
    <ul className="product-list">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  )
}
