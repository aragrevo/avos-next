import React from 'react'
import Link from 'next/link'

import { Spin, Empty, List, Avatar, Space } from 'antd'

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
    const { id, name, quantity, price, image } = item
    return (
      <List.Item key={id} extra={<img width={272} alt="logo" src={image} />}>
        <List.Item.Meta title={name} description={`${quantity} x ${price}`} />
      </List.Item>
    )

    // return {
    //   childKey: id,
    //   header: (
    //     // <Link href="/product/[id]" as={`/product/${id}/`} passHref>
    //     //   <Item.Header as="a">{name}</Item.Header>
    //     // </Link>
    //   ),
    //   image: (
    //     <Item.Image
    //       src={image}
    //       alt={name}
    //       size="small"
    //       style={{ background: '#f2f2f2' }}
    //     />
    //   ),
    //   meta: `${quantity} x ${price}`,
    //   description: 'Some more information goes here....',
    //   extra: (
    //     <Button
    //       basic
    //       icon="remove"
    //       floated="right"
    //       onClick={() => removeFromCart(cartItem)}
    //     />
    //   ),
    // }
  }

  return (
    <List
      itemLayout="vertical"
      size="large"
      renderItem={mapCartItemsToItems}
      dataSource={items}
    />
  )
  // return (
  //   <h1>Cart</h1>
  // )
}

export default CartItemList
