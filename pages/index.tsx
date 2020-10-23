import React, { useState, useEffect } from 'react'
import { Layout, Menu, Breadcrumb } from 'antd'
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'
import { BackTop } from 'antd'

// import Layout from '@components/Layout/Layout'
// import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import ShoppingCartIcon from '../components/Navbar/ShoppingCartIcon'

import 'antd/dist/antd.css'

const { Header, Content, Footer, Sider } = Layout
const { SubMenu } = Menu

const HomePage = () => {
  const [productList, setProductList] = useState<TProduct[]>([])
  const [collapsed, setCollapsed] = useState(false)
  const [contentMarginLeft, setContentMarginLeft] = useState(200)

  const onCollapse = () => {
    setCollapsed(!collapsed)
    setContentMarginLeft(() => (!collapsed ? 80 : 200))
  }

  // useEffect(() => {
  //   window
  //     .fetch('/api/avo')
  //     .then((response) => response.json())
  // .then(({ data }: TAPIAvoResponse) => {
  //       setProductList(data)
  //     })
  // }, [])

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
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        theme="light"
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
        }}
      >
        <div className="logo" />
        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<DesktopOutlined />}>
            Products
          </Menu.Item>
          <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
            Cart
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout" style={{ marginLeft: contentMarginLeft }}>
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          {/* <KawaiiHeader /> */}
          <h1 style={{ color: 'white' }}>Herly's Products</h1>
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
            <ProductList products={productList} />
            <BackTop />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
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

export default HomePage
