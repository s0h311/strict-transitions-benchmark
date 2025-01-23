import { Provider } from 'react-redux'
import rootStore from '../store/store'
import ProductList from '../components/ProductList'

export default function ResultPage() {
  return (
    <Provider store={rootStore}>
      <h1>Result page</h1>

      <ProductList />
    </Provider>
  )
}
