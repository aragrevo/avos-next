import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CategoryForm from '@components/Admin/CategoryForm'

type ICategory = {
  created_at: string
  image: string
  name: string
  type: string
  updated_at: string
  _id: string
}

const ProductPage = () => {
  const { query } = useRouter()
  const [category, setCategory] = useState<ICategory | null>(null)

  useEffect(() => {
    if (query.id == '0') {
      const tmpCategory: ICategory = {
        created_at: '',
        image: '',
        name: '',
        type: '',
        updated_at: '',
        _id: '',
      }
      setCategory(tmpCategory)
      return
    }

    if (query.id) {
      fetch(`https://store.nicobytes.site/api/categories/${query.id}`)
        .then((response) => response.json())
        .then((data: ICategory) => {
          console.log(data)
          setCategory(data)
        })
        .catch((err) => console.log(err))
    }
  }, [query.id])

  return (
    <div>{category == null ? null : <CategoryForm category={category} />}</div>
  )
}

export default ProductPage
