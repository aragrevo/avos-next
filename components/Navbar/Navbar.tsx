import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Layout, Menu } from 'antd'
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons'

import { useCart } from '@store/Cart'

type LayoutProps = {
  children?: React.ReactNode
}

const { SubMenu } = Menu
const { Sider } = Layout

const Navbar = ({ children }: LayoutProps) => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()
  const [collapsed, setCollapsed] = useState(false)
  const [contentMarginLeft, setContentMarginLeft] = useState(200)
  const [categories, setCategories] = useState([])

  const onCollapse = () => {
    setCollapsed(!collapsed)
    setContentMarginLeft(() => (!collapsed ? 80 : 200))
  }

  const fetchCategories = async () => {
    const response = await fetch('https://store.nicobytes.site/api/categories')
    const allCategories = await response.json()
    setCategories(allCategories)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  const mapCategoryItems = () =>
    categories.map((cat) => {
      return 'Hello'
      // const { id, name } = cat
      // return <Menu.Item key={id}>{name}</Menu.Item>
    })

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
        {/* selectedKeys={[props.location.pathname]} */}
        <Menu
          theme="light"
          defaultSelectedKeys={['/']}
          mode="inline"
          selectedKeys={[pathname]}
        >
          <Menu.Item key="/" icon={<DesktopOutlined />}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="/cart" icon={<ShoppingCartOutlined />}>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Categories">
            {categories.map((val) => {
              return <Menu.Item key={val['_id']}>{val['name']}</Menu.Item>
            })}
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
      {children}
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
    // <Menu size="huge" borderless pointing as="header">
    //   <Container text>
    //     <Link href="/" passHref>
    //       <Menu.Item
    //         active={pathname === '/'}
    //         title="Inicio | Todos los productos"
    //       >
    //         <Avocado />
    //         Avo Store
    //       </Menu.Item>
    //     </Link>
    //     <Menu.Menu position="right">
    //       <Link href="/cart" passHref>
    //         <Menu.Item active={pathname === '/cart'}>
    //           <ShoppingCartIcon cartCount={cartCount} name="Canasta" />
    //         </Menu.Item>
    //       </Link>
    //     </Menu.Menu>
    //   </Container>
    //   <style jsx global>{`
    //     .ui.menu.huge {
    //       font-size: 1.5rem;
    //     }
    //   `}</style>
    // </Menu>
  )
}

export default Navbar
