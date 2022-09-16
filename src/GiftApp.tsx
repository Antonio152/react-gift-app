import React, { useState } from 'react'
import { AddCategory, GiftGrid } from './components/'

const GiftApp = () => {
  const [categories, setCategories] = useState<string[]>(['Naruto'])
  const [limit, setLimit] = useState<string>('10')

  const addCategory = (category: string,limit:string) => {
    if (categories.includes(category)) return
    setCategories([...categories, category])
    setLimit(limit)
  }

  return (
    <>
      <h1>GiftApp</h1>
      <AddCategory addCategory={addCategory} />
      {categories.map((item) => (
        <GiftGrid key={item} category={item} limitGifts={limit}/>
      ))}
    </>
  )
}

export default GiftApp
