import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
type CategoryProps ={
  addCategory: (value:string) => void
}
export const AddCategory = ({ addCategory }:CategoryProps) => {
  const [inputValue, setInputValue] = useState('')

  const onChangeEvent = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setInputValue(target.value)
  }

  const handleKeyDown = ({ key, target }:KeyboardEvent) => {
    if (inputValue.trim().length <= 1) return
    const result = (target as HTMLInputElement).value
    if (key === 'Enter') {
      addCategory(result.trim())
      setInputValue('')
    }
  }
  return (
    <input
      type="text"
      placeholder="Buscar Gift"
      name="inputValue"
      value={inputValue}
      onChange={onChangeEvent}
      onKeyDown={handleKeyDown}
    />
  )
}
