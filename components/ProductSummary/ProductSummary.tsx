import React from 'react'
// import { Item, Label } from 'semantic-ui-react'
import { List, Avatar, Space, Card, Col, Row, Image } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'

const { Meta } = Card

type ProductSummaryProps = {
  product: any
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <>
    <Row>
      <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
        <Card bordered={false}>
          <Row>
            <Col>
              <Image
                width={200}
                src={`https://pokeres.bastionbot.org/images/pokemon/${product.id}.png`}
              />
            </Col>

            <Col>
              <Meta title={product.name} description={product.weight} />
              <AddToCart product={product} />
            </Col>
          </Row>
        </Card>
        <ProductAttributes {...product.types} />
      </Col>
    </Row>
  </>
)

export default ProductSummary
