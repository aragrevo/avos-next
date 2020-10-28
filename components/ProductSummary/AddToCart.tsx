import React, { useState, useContext } from 'react'
import { useCartMutations } from '@store/Cart'
import { Form, Button, InputNumber, message } from 'antd'
import { ShoppingCartOutlined } from '@ant-design/icons'

type AddToCartProps = {
  product: TProduct
}

const addToCartRequest = () =>
  new Promise((resolve, reject) => {
    window.setTimeout(resolve, 600)
  })

const validate = (quantity: number) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"

  return error
}

const AddToCart = ({ product }: AddToCartProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [visible, setVisible] = useState(false)
  const { addToCart } = useCartMutations()

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      addToCartRequest()
        .then(() => {
          addToCart(product, quantity)
          setLoading(false)
          setQuantity(quantity)
          setVisible(true)
          toggleMessage()
          success()
        })
        .catch((err: Error) => {
          setError(`Error: ${err}` || 'Something went wrong')
          errorMsg()
          setLoading(false)
        })
    }
  }

  const handleChange = (value: any) => {
    setQuantity(value)
  }

  const success = () => {
    message.success('Added to cart')
  }

  const errorMsg = () => {
    message.error(error)
  }

  const checkQuantity = (rule: any, value: any) => {
    console.log(value)
    if (value.number > 2) {
      return Promise.resolve()
    }
    return Promise.reject('Price must be greater than zero!')
  }

  return (
    <>
      <Form
        name="customized_form_controls"
        layout="inline"
        onFinish={handleSubmit}
      >
        <Form.Item rules={[{ validator: checkQuantity }]}>
          <InputNumber
            // placeholder="Quantity"
            defaultValue={1}
            value={quantity}
            min={1}
            step={1}
            // error={!!error}
            onChange={handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            color="green"
            htmlType="submit"
            icon={<ShoppingCartOutlined />}
            loading={loading}
          >
            Add
          </Button>
        </Form.Item>
      </Form>
      {/* {error && (
        <div style={{ color: 'red', position: 'absolute' }}>{error}</div>
      )} */}
      {/* <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
        <div style={{ color: 'green', position: 'absolute' }}>
          <Icon name="check" />
          Added to cart
        </div>
      </Transition> */}
    </>
  )
}

export default AddToCart
