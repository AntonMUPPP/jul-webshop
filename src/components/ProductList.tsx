import React from 'react'
import ProductCard from './ProductCard'
import useProducts from '../api/useProduct'

const ProductList: React.FC = () => {
  const products = useProducts()

  return (
    <div>
      <h1>Produkter</h1>
      <div className="product-list">
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductList