import React from 'react'
import Link from 'next/link'

import { Layout, Breadcrumb } from 'antd'
import { BackTop } from 'antd'

import ShoppingCartIcon from '@components/Navbar/ShoppingCartIcon'
// import { count } from 'console'
import { useCart, useCartMutations } from '@store/Cart'

type LayoutProps = {
  children?: React.ReactNode
}

const { Header, Content, Footer } = Layout

const Container = ({ children }: LayoutProps) => {
  const { items, count } = useCart()
  return (
    <Layout className="site-layout" style={{ marginLeft: '200px' }}>
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
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div
          className="site-layout-background"
          style={{ padding: 24, minHeight: 360, textAlign: 'center' }}
        >
          {children}
          <BackTop />
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
      <style jsx>{`
        .site-layout-background {
          background: #fff;
        }
        .logo {
          height: 32px;
          background: rgba(0, 0, 0, 0.2);
          margin: 16px;
        }
      `}</style>
    </Layout>
  )
}

export default Container
