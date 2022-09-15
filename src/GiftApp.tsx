import React, { useState } from 'react'
import { AddCategory, GiftGrid } from './components/'

const GiftApp = () => {
  const [categories, setCategories] = useState<string[]>(['Naruto'])

  const addCategory = (value: string) => {
    if (categories.includes(value)) return
    setCategories([...categories, value])
  }

  return (
    <>
      <h1>GiftApp</h1>
      <AddCategory addCategory={addCategory} />
      {categories.map((item) => (
        <GiftGrid key={item} category={item} limitGifts={'10'}/>
      ))}
    </>
  )
}

export default GiftApp
