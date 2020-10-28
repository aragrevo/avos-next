import React from 'react'
import Link from 'next/link'

import { Spin, Empty, List, Button, Statistic, Avatar } from 'antd'
import { DeleteTwoTone } from '@ant-design/icons'

import { CartItemType } from '@store/Cart'

type CartItemListProps = {
  items: CartItemType[]
  removeFromCart: (product: TProduct) => void
  loading?: boolean
}

const CartItemList = ({
  items,
  removeFromCart,
  loading = false,
}: CartItemListProps) => {
  if (loading) return <Spin size="large" />

  if (items.length === 0) return <Empty description={'Your cart is empty'} />

  const mapCartItemsToItems = (item: CartItemType) => {
    const { _id, name, quantity, price, image } = item
    return (
      <List.Item
        key={_id}
        extra={
          <Button
            icon={<DeleteTwoTone />}
            type="text"
            shape="circle"
            onClick={() => removeFromCart(item)}
          />
        }
      >
        <List.Item.Meta
          title={name}
          description={`${quantity} x ${price}`}
          avatar={
            <Avatar
              src={image}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
            />
          }
        />

        <Statistic
          value={price * quantity}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          prefix="$"
        />
      </List.Item>
    )
  }

  return (
    <List
      itemLayout="horizontal"
      size="large"
      renderItem={mapCartItemsToItems}
      dataSource={items}
    />
  )
}

export default CartItemList
