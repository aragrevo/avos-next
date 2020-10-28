import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Space,
  Button,
  AutoComplete,
  Upload,
} from 'antd'
import {
  QuestionCircleOutlined,
  UploadOutlined,
  InboxOutlined,
} from '@ant-design/icons'

const { Option } = Select

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
}

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
}

const filter = (inputValue, path) => {
  return path.some(
    (option) =>
      option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
  )
}

type ICategory = {
  created_at: string
  image: string
  name: string
  type: string
  updated_at: string
  _id: string
}

type ProductSummaryProps = {
  category: ICategory
}

const CategoryForm = ({ category }: ProductSummaryProps) => {
  const { created_at, image, name, type, updated_at, _id } = { ...category }
  console.log('form', category)
  const [form] = Form.useForm()
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
  }

  const [autoCompleteResult, setAutoCompleteResult] = useState([])

  const fileList = _id
    ? [
        {
          uid: '-1',
          name: `${name}.png`,
          status: 'done',
          url: `${image}`,
          thumbUrl: `${image}`,
        },
      ]
    : []

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="category"
      onFinish={onFinish}
      layout="vertical"
      initialValues={{ created_at, image, name, type, updated_at }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[
          {
            required: true,
            message: 'Please input your Name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="type"
        label={
          <span>
            Type&nbsp;
            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: 'Please input your nickname!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item label="Dragger">
        {/* getValueFromEvent={normFile} */}
        <Form.Item name="dragger" valuePropName="fileList" noStyle>
          <Upload.Dragger
            listType="picture"
            action="/upload.do"
            defaultFileList={[...fileList]}
          ></Upload.Dragger>
        </Form.Item>
      </Form.Item>

      <Form.Item name="created_at" label="Created at">
        <Input disabled />
      </Form.Item>
      <Form.Item name="updated_at" label="Updated at">
        <Input disabled />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Space>
          <Button type="default" htmlType="button">
            <Link href="/admin/categories">
              <a>Return</a>
            </Link>
          </Button>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Space>
      </Form.Item>
    </Form>
  )
}

export default CategoryForm
