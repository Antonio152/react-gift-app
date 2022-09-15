import React from 'react'
import { GiftContent } from '../types'

const GiftItem = ({ title, url }:GiftContent) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GiftItem
