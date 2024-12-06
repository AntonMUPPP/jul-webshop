import React from 'react'
import { useParams } from 'react-router-dom'
import useProductDetail from '../api/useProductDetail'

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return <p>Produkt-ID saknas!</p>
  }

  const product = useProductDetail(id)

  if (!product) {
    return <p>Laddar...</p>
  }

  return (
    <div className="product-detail">
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p className="price">Pris: {product.price} kr</p>
        <p className="stock">I lager: {product.stock}</p>
      </div>
    </div>
  )
}

export default ProductDetail