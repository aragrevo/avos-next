import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { Table, Space, Image, Spin, Button } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',
    render: (text, record) => (
      <Image width={200} src={text} placeholder={<Spin />} />
    ),
  },
  {
    title: 'Created_at',
    dataIndex: 'created_at',
    key: 'created_at',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Link href={`categories/${record._id}`}>
          <a>Edit</a>
        </Link>
        <a>Delete </a>
      </Space>
    ),
  },
]

const CategoriesPage = () => {
  const [categories, setCategories] = useState([])
  const fetchCategories = async () => {
    const response = await fetch('https://store.nicobytes.site/api/categories')
    const allCategories = (await response.json()).map((category: any) => ({
      ...category,
      key: category._id,
    }))
    setCategories(allCategories)
    console.log(allCategories)
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div>
      <h1>Categories</h1>
      <Button type="primary">
        <Link href="categories/0">
          <a>New Category</a>
        </Link>
      </Button>
      <Table columns={columns} dataSource={categories} />
    </div>
  )
}

export default CategoriesPage
