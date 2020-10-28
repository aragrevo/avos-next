import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import MyLayout from '@components/Layout/MyLayout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

const ProductPage = () => {
  const { query } = useRouter()
  const [product, setProduct] = useState<any | null>(null)

  useEffect(() => {
    if (query.id) {
      fetch(`https://store.nicobytes.site/api/products/${query.id}`)
        .then((response) => response.json())
        .then((data: any) => {
          console.log(data)
          setProduct(data)
        })
    }
  }, [query.id])

  return (
    <MyLayout>
      {product == null ? null : <ProductSummary product={product} />}
    </MyLayout>
  )
}

export default ProductPage
