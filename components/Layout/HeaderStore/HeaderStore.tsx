import React from 'react'
import Link from 'next/link'

import { Layout } from 'antd'

import ShoppingCartIcon from '@components/Layout/Navbar/ShoppingCartIcon'
const { Header } = Layout

import { useCart, useCartMutations } from '@store/Cart'

const HeaderStore = () => {
  const { items, count } = useCart()
  return (
    <Header
      className="site-layout-background"
      style={{
        padding: 0,
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <Link href="/">
        <a>
          <h1 style={{ color: 'white' }}>Pokemon Store</h1>
        </a>
      </Link>
      <Link href="/cart">
        <a>
          <ShoppingCartIcon cartCount={count} name="Canasta" />
        </a>
      </Link>
    </Header>
  )
}

export default HeaderStore
