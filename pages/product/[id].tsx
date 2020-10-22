import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const ProductPage = () => {
  const [product, setProduct] = useState<TProduct>()
  const {
    query: { id },
  } = useRouter()

  useEffect(() => {
    id &&
      window
        .fetch(`/api/avo/${id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error)
  }, [id])

  return (
    <section>
      <h1>Página producto: {id}</h1>
      <h3>{product?.name}</h3>
    </section>
  )
}

export default ProductPage
