import './ProductCard.css'
import { Product } from '../store/productStore'

type ProductCardProps = {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product">
      <h3>{product.title}</h3>
      <div>{product.description}</div>
      <div>${product.price}</div>
      <div>{product.stock} in stock</div>
      <div>Rating {product.rating}/5</div>
      <ul>
        {product.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}
