import React, { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import { Menu, Container } from 'semantic-ui-react'
import { Menu } from 'antd'

import { Avocado } from '@components/SVGIcons'
import ShoppingCartIcon from './ShoppingCartIcon'
import { useCart } from '@store/Cart'

const { SubMenu } = Menu

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <Menu mode="horizontal">
      <Menu.Item>Menu</Menu.Item>
      <SubMenu title="SubMenu">
        <Menu.Item>SubMenuItem</Menu.Item>
      </SubMenu>
    </Menu>
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
