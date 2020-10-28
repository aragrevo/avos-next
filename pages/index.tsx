import React, { useState, useEffect } from 'react'

import ProductList from '@components/ProductList/ProductList'
import MyLayout from '@components/Layout/MyLayout'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  useEffect(() => {
    fetch('https://store.nicobytes.site/api/products')
      .then((response) => response.json())
      .then((allProducts: TProduct[]) => {
        setProductList(allProducts)
      })
      .catch((err) => console.error(err))
  }, [])

  return (
    <MyLayout>
      <ProductList products={productList} />
    </MyLayout>
  )
}

export default HomePage
