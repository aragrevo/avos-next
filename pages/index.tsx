import React, { useState, useEffect } from 'react'

import ProductList from '@components/ProductList/ProductList'
import MyLayout from '@components/Layout/MyLayout'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  const fetchPokemonData = async (pokemon: any) => {
    let url = pokemon.url
    try {
      const response = await fetch(url)
      const { id, name, order, weight, abilities } = await response.json()
      const data: TProduct = {
        id,
        name,
        sku: order,
        price: weight,
        image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
        attributes: abilities,
      }
      setProductList((oldProductList) => [...oldProductList, data])
    } catch (error) {
      console.error(error)
      throw new Error('' + error)
    }
  }

  useEffect(() => {
    // fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    fetch('https://store.nicobytes.site/api/products')
      .then((response) => response.json())
      .then((allProducts) => {
        // for (const product of results) {
        //   fetchPokemonData(product)
        // }
        //   console.log(allProducts);
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
