import { useState, useEffect } from 'react'
import axios from 'axios'

interface Product {
  id: number
  name: string
  price: number
  description: string
  stock: number
}

const useProductDetail = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null)

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error))
  }, [id])

  return product
}

export default useProductDetail