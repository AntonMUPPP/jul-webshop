import { useState, useEffect } from 'react'
import axios from 'axios'

interface Product {
  id: number
  name: string
  price: number
}

const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    axios.get('http://localhost:3001/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error))
  }, [])
  
  return products
}

export default useProducts