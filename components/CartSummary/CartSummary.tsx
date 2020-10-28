import React from 'react'
import { Button, Row, Col, Popconfirm } from 'antd'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  return (
    <Row>
      <Col xs={4}>
        <span>
          <strong>Sub total:</strong>
          {` ${totalAmount}`}
        </span>
      </Col>
      <Col xs={4} offset={16}>
        <Button color="black">Check out</Button>
      </Col>
    </Row>
  )
}

export default CartSummary
