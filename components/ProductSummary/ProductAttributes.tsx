import React from 'react'
// import { Header, Divider, Table } from 'semantic-ui-react'
import { Layout, Table, PageHeader, Statistic, Descriptions } from 'antd'
const { Header, Content, Footer } = Layout
const columns = [
  {
    title: 'Attribute',
    children: [
      {
        dataIndex: 'age',
        key: 'age',
      },
      {
        dataIndex: 'name',
        key: 'name',
      },
    ],
  },
]

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
]

const ProductAttributes = (sprites: any) => (
  <>
    <PageHeader title={'About this Pokemon'}></PageHeader>
    <Table columns={columns} dataSource={data} pagination={false} />
  </>
)

export default ProductAttributes
