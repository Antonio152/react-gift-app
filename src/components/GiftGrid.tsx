import React from 'react'
import { useFetchContent } from '../hooks/useFetchContent'
import { CategoryGridProps, GiftContent } from '../types'
import GiftItem from './GiftItem'

export const GiftGrid = ({ category, limitGifts }: CategoryGridProps) => {
  const { isLoading, images } = useFetchContent(category, limitGifts)
  return (
    <>
      <h3>{category}</h3>
      {
        isLoading && <h2>Cargando...</h2>
      }
      <div className='card-grid'>
        {images.map((image:GiftContent) => <GiftItem key={image.id} {...image}/>)}
      </div>
    </>
  )
}
