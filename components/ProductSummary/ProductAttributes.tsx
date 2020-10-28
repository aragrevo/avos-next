import React from 'react'
// import { Header, Divider, Table } from 'semantic-ui-react'
import { Layout, Table, PageHeader, Statistic, Descriptions } from 'antd'
const { Header, Content, Footer } = Layout
// const columns = [
//   {
//     title: 'Attribute',
//     children: [
//       {
//         dataIndex: 'age',
//         key: 'age',
//       },
//       {
//         dataIndex: 'name',
//         key: 'name',
//       },
//     ],
//   },
// ]

// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     tags: ['nice', 'developer'],
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     tags: ['loser'],
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     tags: ['cool', 'teacher'],
//   },
// ]

const ProductAttributes = (product: TProduct) => (
  <>
    {/* <PageHeader title={'About this Pokemon'}></PageHeader>
    <Table columns={columns} dataSource={data} pagination={false} /> */}
    <Descriptions
      title="Product Info"
      column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
    >
      <Descriptions.Item label="Category">
        {product.category_id}
      </Descriptions.Item>
      <Descriptions.Item label="Type">{product.type}</Descriptions.Item>
      <Descriptions.Item label="Sku">{product.sku}</Descriptions.Item>
      <Descriptions.Item label="Description">
        {product.description}
      </Descriptions.Item>
    </Descriptions>
    ,
  </>
)

export default ProductAttributes
