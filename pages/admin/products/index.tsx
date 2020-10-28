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
    title: 'Category',
    dataIndex: 'category_id',
    key: 'category_id',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  //   {
  //     title: 'Image',
  //     dataIndex: 'image',
  //     key: 'image',
  //     render: (text, record) => (
  //       <Image width={200} height={200} src={text} placeholder={<Spin />} />
  //     ),
  //   },
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
        <Link href={`products/${record._id}`}>
          <a>Edit</a>
        </Link>
        <a>Delete </a>
      </Space>
    ),
  },
]

const ProductsPage = () => {
  const [products, setProducts] = useState([])
  const fetchProducts = async () => {
    const response = await fetch('https://store.nicobytes.site/api/products')
    const allProducts = (await response.json()).map((category: any) => ({
      ...category,
      key: category._id,
    }))
    setProducts(allProducts)
    console.log(allProducts)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Product</h1>
      <Button type="primary">
        <Link href="products/0">
          <a>New Product</a>
        </Link>
      </Button>
      <Table columns={columns} dataSource={products} />
    </div>
  )
}

export default ProductsPage
