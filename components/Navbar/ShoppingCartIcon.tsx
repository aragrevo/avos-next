import React from 'react'
import { Basket } from '@components/SVGIcons'

import { Badge } from 'antd'

type ShoppingCartIconProps = {
  cartCount: number
  name: string
}

const ShoppingCartIcon = ({ cartCount, name }: ShoppingCartIconProps) => {
  return (
    <div className="container">
      <Badge count={cartCount} overflowCount={9} size="small">
        <Basket />
      </Badge>

      <style jsx>{`
        .container {
          margin-right: 16px;
          display: flex;
          align-items: center;
        }
        .text {
          margin-left: 0.5rem;
        }
        .text span {
          font-size: smaller;
        }
      `}</style>
    </div>
  )
}

export default ShoppingCartIcon
