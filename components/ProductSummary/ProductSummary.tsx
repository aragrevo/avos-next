import React from 'react'
// import { Item, Label } from 'semantic-ui-react'
import {
  List,
  Avatar,
  Space,
  Statistic,
  Descriptions,
  Card,
  Col,
  Row,
  Image,
} from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons'

import AddToCart from './AddToCart'
import ProductAttributes from './ProductAttributes'

const { Meta } = Card

type ProductSummaryProps = {
  product: TProduct
}

const ProductSummary = ({ product }: ProductSummaryProps) => (
  <>
    <Row>
      <Col xs={{ span: 20, offset: 2 }} md={{ span: 12, offset: 6 }}>
        <Card bordered={false}>
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              <Image src={product.image} width="200px" />
            </Col>

            <Col xs={{ span: 24 }} md={{ span: 12 }}>
              {/* <Meta title={product.name} description={product.price} /> */}
              <Descriptions
                title={product.name}
                column={{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }}
              >
                <Descriptions.Item>
                  <Statistic
                    value={product.price}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix="$"
                  />
                </Descriptions.Item>
              </Descriptions>
              <AddToCart product={product} />
            </Col>
          </Row>
        </Card>
        <ProductAttributes {...product} />
      </Col>
    </Row>
  </>
)

export default ProductSummary
