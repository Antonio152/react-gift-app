import React, { ChangeEvent, useState } from 'react'
import { cleanCategory, cleanNumbers } from '../helper'
import { CategoryProps } from '../types'
export const AddCategory = ({ addCategory }:CategoryProps) => {
  const [inputValues, setInputValues] = useState({
    category:'',
    limit:''
  })
  const {category,limit} = inputValues

  const onChangeEvent = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValues({...inputValues,[target.name]:target.value})
  }

  const sendCategory = () => {
    const validLimit = cleanNumbers(limit)
    const validCategory = cleanCategory(category)
    addCategory(validCategory,validLimit)
    setInputValues({
      category:'',
      limit:''
    })
  }
  
  return (
    <>
      <input
        type="text"
        placeholder="Search Gift"
        name="category"
        className='inputSearch'
        value={category}
        onChange={onChangeEvent}
      />
      <input
        type="text"
        placeholder="Number of gifts"
        name="limit"
        className='inputNumber'
        value={limit}
        onChange={onChangeEvent}
      />
      <button className='btnSearch' disabled={ (category.trim() === '' || limit.trim() === '') ? true : false } onClick={sendCategory}>Search</button>
    </>
  )
}
