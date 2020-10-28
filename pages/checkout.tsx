import React, { useState } from 'react'
import { Steps, Button, message } from 'antd'
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
} from '@ant-design/icons'

import Container from '@components/Layout/Container'
import RegisterForm from '@components/Register/RegisterForm'
import HeaderStore from '@components/Layout/HeaderStore/HeaderStore'

const { Step } = Steps

const steps = [
  {
    title: 'Register',
    icon: <UserOutlined />,
    content: <RegisterForm />,
  },
  {
    title: 'Verification',
    content: 'Second-content',
    icon: <SolutionOutlined />,
    status: 'wait',
  },
  {
    title: 'Pay',
    content: 'Last-content',
    status: 'wait',
    icon: <LoadingOutlined />,
  },
  {
    title: 'Done',
    content: 'Last-content',
    status: 'wait',
    icon: <SmileOutlined />,
  },
]

const Checkout = () => {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent(current + 1)
  const previous = () => setCurrent(current - 1)

  return (
    <div>
      <HeaderStore />
      <Container>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} icon={item.icon} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={previous}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success('Processing complete!')}
            >
              Done
            </Button>
          )}
        </div>
      </Container>
      <style jsx>{`
        .steps-content {
          margin-top: 16px;
          border: 1px dashed #e9e9e9;
          border-radius: 2px;
          background-color: #fafafa;
          min-height: 200px;
          text-align: center;
          padding-top: 80px;
        }

        .steps-action {
          margin-top: 24px;
        }
      `}</style>
    </div>
  )
}

export default Checkout
