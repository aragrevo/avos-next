import React from 'react'
import Link from 'next/link'

import { List, Card } from 'antd'
const { Meta } = Card

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = ({ name, id, price, image }: TProduct) => (
  <Link key={id} href="/product/[id]" as={`/product/${id}`} passHref>
    <Card hoverable cover={<img alt="example" src={image} />}>
      {/* cover={image} */}
      {/* meta={<Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>} */}
      <Meta title={name} description={price}></Meta>
    </Card>
  </Link>
)

const ProductList = ({ products }: ProductListProps) => (
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 5,
      xxl: 3,
    }}
    dataSource={products}
    renderItem={(item) => <List.Item>{mapProductsToCards(item)}</List.Item>}
  />
)

export default ProductList
