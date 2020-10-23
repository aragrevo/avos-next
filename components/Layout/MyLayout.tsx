import React from 'react'

import Navbar from '@components/Navbar/Navbar'
import Container from './Container'

type LayoutProps = {
  children?: React.ReactNode
}

const MyLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Navbar>
        <Container>{children}</Container>
      </Navbar>
    </>
  )
}

export default MyLayout
