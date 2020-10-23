import React, { useState, useEffect } from 'react'

import ProductList from '@components/ProductList/ProductList'
import MyLayout from '@components/Layout/MyLayout'

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

  const fetchPokemonData = (pokemon: any) => {
    let url = pokemon.url
    fetch(url)
      .then((response) => response.json())
      .then(({ id, name, order, weight, abilities }: any) => {
        const data: TProduct = {
          id,
          name,
          sku: order,
          price: weight,
          image: `https://pokeres.bastionbot.org/images/pokemon/${id}.png`,
          attributes: abilities,
        }
        setProductList((oldProductList) => [...oldProductList, data])
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    window
      .fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then((response) => response.json())
      .then((allPokemon) => {
        for (const pokemon of allPokemon.results) {
          fetchPokemonData(pokemon)
        }
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
