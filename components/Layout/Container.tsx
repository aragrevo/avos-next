import React from 'react'

import { Layout, Breadcrumb } from 'antd'
import { BackTop } from 'antd'

// import { count } from 'console'

type LayoutProps = {
  children?: React.ReactNode
}

const { Content } = Layout

const Container = ({ children }: LayoutProps) => {
  return (
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
    </Content>
  )
}

export default Container
