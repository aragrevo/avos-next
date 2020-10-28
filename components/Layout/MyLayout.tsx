import React from 'react'
import { Layout } from 'antd'

import HeaderStore from '@components/Layout/HeaderStore/HeaderStore'
import Navbar from '@components/Layout/Navbar/Navbar'
import Container from './Container'

const { Footer } = Layout

type LayoutProps = {
  children?: React.ReactNode
}

const MyLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar>
        <Layout className="site-layout" style={{ marginLeft: '200px' }}>
          <HeaderStore />
          <Container>{children}</Container>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Navbar>
    </>
  )
}

export default MyLayout
