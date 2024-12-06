import React from 'react'
import { Link } from 'react-router-dom'

interface ProductProps {
  id: number
  name: string
  price: number
}

const ProductCard: React.FC<ProductProps> = ({ id, name, price }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${id}`}>
        <h2>{name}</h2>
        <p>{price} kr</p>
      </Link>
    </div>
  )
}

export default ProductCard