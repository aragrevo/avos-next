import React from 'react'

import { Layout, Breadcrumb } from 'antd'
import { BackTop } from 'antd'

import ShoppingCartIcon from '@components/Navbar/ShoppingCartIcon'

type LayoutProps = {
  children?: React.ReactNode
}

const { Header, Content, Footer } = Layout

const Container = ({ children }: LayoutProps) => {
  return (
    <Layout className="site-layout" style={{ marginLeft: '200px' }}>
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <h1 style={{ color: 'white' }}>Pokemon Store</h1>
        <ShoppingCartIcon cartCount={12} name="Canasta" />
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
