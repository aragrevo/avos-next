import React from 'react'
import Link from 'next/link'

import { List, Card } from 'antd'
const { Meta } = Card

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = ({ name, _id, price, image }: TProduct) => (
  <Link key={_id} href="/product/[_id]" as={`/product/${_id}`} passHref>
    <a>
      <Card hoverable cover={<img alt="example" src={image} />}>
        <Meta title={name} description={price}></Meta>
      </Card>
    </a>
  </Link>
)

const ProductList = ({ products }: ProductListProps) => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 3,
      lg: 4,
      xl: 5,
      xxl: 3,
    }}
    dataSource={products}
    renderItem={(item) => <List.Item>{mapProductsToCards(item)}</List.Item>}
  />
)

export default ProductList
