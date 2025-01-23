import { Provider } from 'react-redux'
import rootStore from '../store/store'
import ProductList from '../components/ProductList'
import FilterList from '../components/FilterList'

export default function ResultPage() {
  return (
    <Provider store={rootStore}>
      <h1>Result page</h1>
      <FilterList />
      <ProductList />
    </Provider>
  )
}
